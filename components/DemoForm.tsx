"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import { EXTERNAL } from "@/lib/routes";

export default function DemoForm() {
  const { t } = useTranslation();
  const types = t("contact.form.types", { returnObjects: true }) as string[];
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="card reveal" style={{ padding: "clamp(24px,3vw,38px)" }}>
      <form
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          if (!e.currentTarget.checkValidity()) {
            e.currentTarget.reportValidity();
            return;
          }
          setSubmitted(true);
        }}
      >
        <div className="grid gap-4 grid-cols-2">
          <div className="field col-span-2">
            <label htmlFor="name">{t("contact.form.name")}</label>
            <input className="input" id="name" name="name" type="text" placeholder={t("contact.form.namePlaceholder")} required />
          </div>
          <div className="field col-span-2">
            <label htmlFor="hotel">{t("contact.form.hotel")}</label>
            <input className="input" id="hotel" name="hotel" type="text" placeholder={t("contact.form.hotelPlaceholder")} required />
          </div>
          <div className="field">
            <label htmlFor="email">{t("contact.form.email")}</label>
            <input className="input" id="email" name="email" type="email" placeholder={t("contact.form.emailPlaceholder")} required />
          </div>
          <div className="field">
            <label htmlFor="phone">{t("contact.form.phone")}</label>
            <input className="input" id="phone" name="phone" type="tel" placeholder={t("contact.form.phonePlaceholder")} />
          </div>
          <div className="field col-span-2">
            <label htmlFor="type">{t("contact.form.propertyType")}</label>
            <select className="select" id="type" name="type" defaultValue={types[0]}>
              {types.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className="field col-span-2">
            <label htmlFor="message">{t("contact.form.message")}</label>
            <textarea
              className="textarea"
              id="message"
              name="message"
              placeholder={t("contact.form.messagePlaceholder")}
            />
          </div>
        </div>
        <Button
          type="submit"
          size="lg"
          className="w-full mt-[22px]"
          disabled={submitted}
        >
          {submitted ? t("contact.form.submitting") : t("contact.form.submit")}
        </Button>
        <p className="text-muted text-[12.5px] mt-[14px] text-center">
          {t("contact.form.consent")}{" "}
          <a href={EXTERNAL.PRIVACY} className="text-brand-700">
            {t("contact.form.privacyPolicy")}
          </a>
          {t("contact.form.noSpam")}
        </p>
        <div
          className="mt-[18px] py-[16px] px-[18px] rounded-[14px] bg-brand-50 border border-solid border-brand-200 text-brand-800 text-[14.5px]"
          style={{
            display: submitted ? "block" : "none",
          }}
        >
          <strong>{t("contact.form.successTitle")}</strong> {t("contact.form.successBody")}
        </div>
      </form>
    </div>
  );
}
