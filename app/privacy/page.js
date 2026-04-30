import { StubPage } from "@/components/StubPage";
import { site } from "@/data/site";

const { marketing } = site;

export const metadata = {
  title: `${marketing.privacyPage.title} | ${site.name}`,
  description: marketing.privacyPage.paragraphs[0]?.slice(0, 158),
};

export default function PrivacyPage() {
  const { privacyPage } = marketing;

  return (
    <StubPage title={privacyPage.title} kicker={privacyPage.kicker}>
      {privacyPage.paragraphs.map((text, index) => (
        <p key={index} className={index > 0 ? "mt-4" : undefined}>
          {text}
        </p>
      ))}
    </StubPage>
  );
}
