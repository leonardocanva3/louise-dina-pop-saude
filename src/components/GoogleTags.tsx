import Script from "next/script";

export function GoogleTags() {
  const analyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const tagId = analyticsId || adsId;

  if (!tagId) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${tagId}`} strategy="afterInteractive" />
      <Script id="google-tags" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());${
          analyticsId ? `gtag('config','${analyticsId}',{anonymize_ip:true});` : ""
        }${adsId ? `gtag('config','${adsId}');` : ""}`}
      </Script>
    </>
  );
}
