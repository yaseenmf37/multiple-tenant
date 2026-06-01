"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { useLocalized } from "@/lib/i18n/context";
import { EXTERNAL } from "@/lib/routes";

export default function DemoForm() {
  const { t } = useLocalized();
  const f = t.contact.form;
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
            <label htmlFor="name">{f.name}</label>
            <input className="input" id="name" name="name" type="text" placeholder={f.namePlaceholder} required />
          </div>
          <div className="field col-span-2">
            <label htmlFor="hotel">{f.hotel}</label>
            <input className="input" id="hotel" name="hotel" type="text" placeholder={f.hotelPlaceholder} required />
          </div>
          <div className="field">
            <label htmlFor="email">{f.email}</label>
            <input className="input" id="email" name="email" type="email" placeholder={f.emailPlaceholder} required />
          </div>
          <div className="field">
            <label htmlFor="phone">{f.phone}</label>
            <input className="input" id="phone" name="phone" type="tel" placeholder={f.phonePlaceholder} />
          </div>
          <div className="field col-span-2">
            <label htmlFor="type">{f.propertyType}</label>
            <select className="select" id="type" name="type" defaultValue={f.types[0]}>
              {f.types.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className="field col-span-2">
            <label htmlFor="message">{f.message}</label>
            <textarea
              className="textarea"
              id="message"
              name="message"
              placeholder={f.messagePlaceholder}
            />
          </div>
        </div>
        <Button
          type="submit"
          size="lg"
          className="w-full mt-[22px]"
          disabled={submitted}
        >
          {submitted ? f.submitting : f.submit}
        </Button>
        <p className="text-muted text-[12.5px] mt-[14px] text-center">
          {f.consent}{" "}
          <a href={EXTERNAL.PRIVACY} className="text-brand-700">
            {f.privacyPolicy}
          </a>
          {f.noSpam}
        </p>
        <div
          className="mt-[18px] py-[16px] px-[18px] rounded-[14px] bg-brand-50 border border-solid border-brand-200 text-brand-800 text-[14.5px]"
          style={{
            display: submitted ? "block" : "none",
          }}
        >
          <strong>{f.successTitle}</strong> {f.successBody}
        </div>
      </form>
    </div>
  );
}
