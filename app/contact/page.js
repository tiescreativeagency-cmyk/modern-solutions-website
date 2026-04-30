import { StubPage } from "@/components/StubPage";
import { site } from "@/data/site";

const { marketing } = site;

export const metadata = {
  title: `${marketing.contactPage.title} | ${site.name}`,
  description: marketing.contactPage.paragraphs[0],
};

export default function ContactPage() {
  const { contactPage } = marketing;

  return (
    <StubPage title={contactPage.title} kicker={contactPage.kicker}>
      {contactPage.paragraphs.map((text, index) => (
        <p key={index} className={index > 0 ? "mt-4" : undefined}>
          {text}
        </p>
      ))}
    </StubPage>
  );
}
