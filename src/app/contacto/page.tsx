import type { Metadata } from "next";
import ContactoContent from "./ContactoContent";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Cuéntanos tu proyecto. Cotiza tu sitio web, tienda en línea o software a medida con HAMCSoft. Respondemos por WhatsApp, correo o teléfono desde Puerto Vallarta, México.",
  alternates: { canonical: "https://hamcsoft.com/contacto" },
  openGraph: {
    title: "Contacto — HAMCSoft",
    description:
      "Cuéntanos tu proyecto y recibe una cotización sin compromiso.",
    url: "https://hamcsoft.com/contacto",
    siteName: "HAMCSoft",
    locale: "es_MX",
    type: "website",
  },
};

export default function ContactoPage() {
  return <ContactoContent />;
}
