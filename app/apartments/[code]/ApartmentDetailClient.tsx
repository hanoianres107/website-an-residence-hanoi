"use client";

import Image from "next/image";
import Link from "next/link";
import { Apartment, apartmentPhotos } from "@/lib/apartments";
import { useLang } from "@/lib/lang";
import { AMENITIES, COMMON_AMENITIES } from "@/lib/amenities";
import { AmenityIcon } from "@/components/AmenityIcon";
import { SectionLabel } from "@/components/SectionLabel";
import { RatingLockup } from "@/components/RatingLockup";

const REVIEWS_VI = [
  {
    name: "Ewan Vojnov",
    meta: "Local Guide · 16 đánh giá · 17 ảnh",
    body: "Khu căn hộ vừa hoàn thiện, cảm giác premium ngay từ khi bước qua cửa. Thiết kế nghệ thuật, hoàn thiện cao cấp, chi tiết tinh tế tạo bầu không khí riêng. Recommend cho ai trân trọng nghệ thuật.",
    date: "một năm trước",
  },
  {
    name: "Khánh Linh Dương",
    meta: "2 đánh giá · 4 ảnh",
    body: "Toà nhà thực sự đẹp. Em đã có trải nghiệm tuyệt vời với dịch vụ chuẩn, nhân viên thân thiện và quản lý chu đáo. Thiết kế khác biệt với phần lớn căn hộ ở Hà Nội. Bồn tắm ngoài trời cực thư giãn!",
    date: "2 năm trước",
  },
  {
    name: "Ngọc Trâm Nguyễn Thị",
    meta: "3 đánh giá · 3 ảnh",
    body: "Toà có view hồ rất đẹp. Trong phòng đầy đủ mọi tiện nghi. Nhân viên phục vụ chuyên nghiệp, tận tình.",
    date: "một năm trước",
  },
];

const REVIEWS_EN = [
  {
    name: "Ewan Vojnov",
    meta: "Local Guide · 16 reviews · 17 photos",
    body: "Freshly built apartment complex, feels premium from the moment you step through the entrance. Art design, high-quality finishes, and thoughtful details create a unique atmosphere. Recommend for anyone who values comfort and appreciates art.",
    date: "a year ago",
  },
  {
    name: "Khánh Linh Dương",
    meta: "2 reviews · 4 photos",
    body: "The building is really nice. I had amazing experiences there with excellent services, kind people and helpful management. The design and concept are unique and quite different from others in Hanoi. I love the outdoor bath tub — so relaxing!",
    date: "2 years ago",
  },
  {
    name: "Ngọc Trâm Nguyễn Thị",
    meta: "3 reviews · 3 photos",
    body: "Beautiful lake view. Apartments are fully equipped. Staff was professional and attentive.",
    date: "a year ago",
  },
];

export function ApartmentDetailClient({ apartment: apt }: { apartment: Apartment }) {
  const { lang, t } = useLang();
  const reviews = lang === "vi" ? REVIEWS_VI : REVIEWS_EN;
  const allPhotos = apartmentPhotos(apt.code); // real files only — 3 to 5 per apartment
  const [heroPhoto, ...restPhotos] = allPhotos;
  const sidePhotos = restPhotos.slice(0, 4);

  return (
    <>
      {/* Breadcrumb */}
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 pt-6 text-xs text-ash flex items-center gap-2">
        <Link href="/apartments" className="hover:text-son">{t.detail.backToAll}</Link>
        <span>›</span>
        <span className="text-walnut">AN.{apt.code}</span>
      </div>

      {/* Title block */}
      <section className="mx-auto max-w-[1320px] px-6 lg:px-10 pt-4">
        <div className="font-label text-[11px] text-son">AN.{apt.code} · {lang === "vi" ? `Tầng ${apt.floor}` : `Floor ${apt.floor}`}</div>
        <h1 className="mt-2 font-display text-4xl sm:text-5xl text-ink leading-tight max-w-3xl">
          {lang === "vi" ? apt.themeVi : apt.themeEn}
        </h1>
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-walnut">
          <span className="inline-flex items-center gap-1.5"><Star /> 5,0 · {lang === "vi" ? "9 đánh giá" : "9 reviews"}</span>
          <span className="text-ash">·</span>
          <span>{apt.sizeSqm}m² · {apt.bedrooms} {lang === "vi" ? "phòng ngủ" : apt.bedrooms > 1 ? "bedrooms" : "bedroom"} · {apt.maxGuests} {lang === "vi" ? "khách" : "guests"}</span>
          <span className="text-ash">·</span>
          <a href="https://maps.app.goo.gl/" target="_blank" rel="noreferrer" className="underline hover:text-son">
            107 Ô Đồng Lầm, Đống Đa, Hà Nội
          </a>
        </div>
      </section>

      {/* Photo grid — Airbnb-style: 1 large hero + up to 4 small, adapts to real photo count */}
      <section className="mx-auto max-w-[1320px] px-6 lg:px-10 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 rounded-3xl overflow-hidden">
          <div className="relative aspect-[4/3] md:aspect-auto md:h-[520px]">
            <Image src={heroPhoto} alt="" fill priority sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
          </div>
          {sidePhotos.length > 0 && (
            <div className="hidden md:block h-[520px]">
              <div className={`grid h-full gap-2 ${sidePhotos.length <= 1 ? "" : sidePhotos.length === 2 ? "grid-rows-2" : "grid-cols-2 grid-rows-2"}`}>
                {sidePhotos.map((src, i) => (
                  <div
                    key={src}
                    className={`relative ${sidePhotos.length === 3 && i === 0 ? "col-span-2" : ""}`}
                  >
                    <Image src={src} alt="" fill sizes="25vw" className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Two-column: content + sticky booking */}
      <section className="mx-auto max-w-[1320px] px-6 lg:px-10 mt-12 grid lg:grid-cols-[1.55fr_1fr] gap-12">
        <div>
          {/* Quick facts */}
          <div className="border-b border-line pb-8">
            <h2 className="font-display text-3xl text-ink leading-snug">
              {lang === "vi"
                ? `Căn ${apt.tier === "studio" ? "studio" : apt.tier === "deluxe" ? "deluxe view hồ" : "family suite"} tại tầng ${apt.floor}`
                : `${apt.tier === "studio" ? "Studio" : apt.tier === "deluxe" ? "Deluxe lakeview suite" : "Family suite"} on floor ${apt.floor}`}
            </h2>
            <p className="mt-2 text-walnut text-sm">
              {apt.maxGuests} {lang === "vi" ? "khách" : "guests"} · {apt.bedrooms} {lang === "vi" ? "phòng ngủ" : apt.bedrooms > 1 ? "bedrooms" : "bedroom"} · {apt.bathrooms} {lang === "vi" ? "phòng tắm" : apt.bathrooms > 1 ? "bathrooms" : "bathroom"} · {apt.sizeSqm}m²
            </p>
          </div>

          {/* Story */}
          <div className="py-10 border-b border-line">
            <SectionLabel>{t.detail.storyEyebrow}</SectionLabel>
            <p className="mt-4 text-lg leading-relaxed text-walnut max-w-2xl">
              {lang === "vi" ? apt.storyVi : apt.storyEn}
            </p>
          </div>

          {/* Amenities */}
          <div className="py-10 border-b border-line">
            <h3 className="font-display text-2xl text-ink mb-6">{t.detail.amenitiesTitle}</h3>
            <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
              {apt.amenityKeys.map((key) => {
                const meta = AMENITIES[key];
                if (!meta) return null;
                return (
                  <div key={key} className="flex items-center gap-3">
                    <AmenityIcon name={meta.icon} className="w-5 h-5 text-walnut" />
                    <span className="text-sm text-ink">{lang === "vi" ? meta.vi : meta.en}</span>
                  </div>
                );
              })}
              {Object.entries(COMMON_AMENITIES).slice(0, 6).map(([key, meta]) => (
                <div key={key} className="flex items-center gap-3">
                  <AmenityIcon name={meta.icon} className="w-5 h-5 text-walnut" />
                  <span className="text-sm text-ink">{lang === "vi" ? meta.vi : meta.en}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Things to know */}
          <div className="py-10 border-b border-line">
            <h3 className="font-display text-2xl text-ink mb-6">{t.detail.knowTitle}</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {t.detail.know.map((item) => (
                <div key={item.h}>
                  <h4 className="font-semibold text-ink text-sm">{item.h}</h4>
                  <p className="mt-1.5 text-sm text-walnut leading-relaxed">{item.b}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="py-10 border-b border-line">
            <div className="flex items-center gap-3 mb-2">
              <Star />
              <h3 className="font-display text-2xl text-ink">5,0 · {t.detail.reviewsCount(9)}</h3>
            </div>
            <p className="text-sm text-walnut max-w-md">{lang === "vi" ? "Trích từ Google Maps · " : "From Google Maps · "}<a className="underline" href="https://www.google.com/maps/place/Hanoi+AN+Residence" target="_blank" rel="noreferrer">{lang === "vi" ? "Xem tất cả" : "See all"}</a></p>
            <div className="mt-6 grid sm:grid-cols-3 gap-6">
              {reviews.map((r) => (
                <div key={r.name}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-kraft flex items-center justify-center font-display text-walnut text-lg">
                      {r.name[0]}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-ink leading-tight">{r.name}</div>
                      <div className="text-xs text-ash">{r.meta}</div>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-ash">
                    <span className="text-gold-deep">★★★★★</span>
                    <span>·</span>
                    <span>{r.date}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-walnut">{r.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="py-10 border-b border-line">
            <h3 className="font-display text-2xl text-ink mb-2">{t.detail.locationTitle}</h3>
            <p className="text-sm text-walnut max-w-xl">{t.detail.locationBody}</p>
            <div className="mt-4 relative aspect-[16/9] rounded-2xl overflow-hidden border border-line">
              <iframe
                src="https://www.google.com/maps?q=107+%C3%94+%C4%90%E1%BB%93ng+L%E1%BA%A7m,+%C4%90%E1%BB%91ng+%C4%90a,+H%C3%A0+N%E1%BB%99i&output=embed"
                className="w-full h-full"
                loading="lazy"
                title="AN Residence map"
              />
            </div>
          </div>

          {/* Host */}
          <div className="py-10">
            <h3 className="font-display text-2xl text-ink mb-3">{t.detail.hostTitle}</h3>
            <div className="flex items-center gap-4 rounded-2xl border border-hairline bg-paper-soft p-5">
              <div className="w-14 h-14 rounded-full bg-son flex items-center justify-center font-display text-paper text-2xl">A</div>
              <div className="flex-1">
                <div className="font-semibold text-ink">AN Residence Front Desk</div>
                <div className="text-sm text-walnut">{t.detail.hostBody}</div>
              </div>
              <a href="tel:+84905991979" className="rounded-full border border-walnut/30 px-4 py-2 text-xs font-label text-walnut hover:bg-walnut hover:text-paper transition whitespace-nowrap">
                {lang === "vi" ? "Gọi host" : "Call host"}
              </a>
            </div>
          </div>
        </div>

        {/* Sticky booking panel — Airbnb signature */}
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <BookingCard apartment={apt} />
          </div>
        </aside>
      </section>

      {/* Mobile sticky bottom reserve bar */}
      <div className="lg:hidden sticky bottom-0 z-30 bg-paper border-t border-hairline p-4 flex items-center justify-between gap-4 shadow-[0_-4px_16px_rgba(0,0,0,0.04)]">
        <div>
          <div className="text-xs text-ash">{t.detail.bookCardEyebrow}</div>
          <div className="font-sans font-bold text-xl text-ink leading-none tabular-nums">
            {(apt.rate / 1_000_000).toFixed(1)}M <span className="text-sm font-medium text-ash">{t.detail.bookCardPerNight}</span>
          </div>
        </div>
        <a
          href="tel:+84905991979"
          className="press inline-flex items-center rounded-full bg-son px-6 py-3 text-sm font-label text-paper"
        >
          {t.detail.bookCta}
        </a>
      </div>

      {/* Final closing */}
      <section className="bg-paper-soft mt-16">
        <div className="mx-auto max-w-[920px] px-6 lg:px-10 py-20 text-center">
          <RatingLockup />
        </div>
      </section>
    </>
  );
}

function BookingCard({ apartment: apt }: { apartment: Apartment }) {
  const { lang, t } = useLang();
  return (
    <div className="rounded-2xl bg-paper p-6 shadow-[var(--shadow-float)] border border-hairline">
      <div className="flex items-baseline justify-between">
        <div>
          <div className="text-xs font-label text-ash">{t.detail.bookCardEyebrow}</div>
          <div className="mt-1 font-sans font-bold text-3xl text-ink leading-none tabular-nums">
            {apt.rate.toLocaleString("vi-VN")}
            <span className="text-sm font-medium text-ash"> {t.detail.bookCardPerNight}</span>
          </div>
        </div>
        <div className="flex items-center gap-1 text-sm text-walnut">
          <Star /> 5,0
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-hairline overflow-hidden">
        <div className="grid grid-cols-2">
          <div className="p-3 border-r border-hairline">
            <div className="text-[10px] font-label text-ash">{t.detail.bookCheckin}</div>
            <div className="text-sm text-mute mt-0.5">{lang === "vi" ? "Thêm ngày" : "Add date"}</div>
          </div>
          <div className="p-3">
            <div className="text-[10px] font-label text-ash">{t.detail.bookCheckout}</div>
            <div className="text-sm text-mute mt-0.5">{lang === "vi" ? "Thêm ngày" : "Add date"}</div>
          </div>
        </div>
        <div className="border-t border-hairline p-3">
          <div className="text-[10px] font-label text-ash">{t.detail.bookGuests}</div>
          <div className="text-sm text-ink mt-0.5">
            2 {lang === "vi" ? "khách" : "guests"}
          </div>
        </div>
      </div>

      <a
        href="tel:+84905991979"
        className="press mt-4 flex items-center justify-center rounded-full bg-son px-5 py-3.5 text-sm font-label text-paper hover:bg-son-deep"
      >
        {t.detail.bookCta}
      </a>
      <p className="mt-3 text-center text-xs text-ash">{t.detail.bookNote}</p>

      <div className="mt-6 pt-5 border-t border-line text-sm">
        <div className="flex justify-between text-walnut">
          <span>{(apt.rate / 1_000_000).toFixed(1)}M VND × 2 {lang === "vi" ? "đêm" : "nights"}</span>
          <span className="tabular-nums">{((apt.rate * 2) / 1_000_000).toFixed(1)}M</span>
        </div>
        <div className="flex justify-between text-walnut mt-2">
          <span>{lang === "vi" ? "Phí dịch vụ" : "Service fee"}</span>
          <span className="tabular-nums">200K</span>
        </div>
        <div className="flex justify-between text-ink font-semibold mt-3 pt-3 border-t border-line">
          <span>{lang === "vi" ? "Tổng dự kiến" : "Estimated total"}</span>
          <span className="tabular-nums">{((apt.rate * 2 + 200000) / 1_000_000).toFixed(2)}M VND</span>
        </div>
      </div>

      <div className="mt-5 text-xs text-center text-walnut">
        {t.detail.bookContact}{" "}
        <a href="tel:+84905991979" className="text-son hover:text-son-deep underline">
          +84 905 991 979
        </a>
      </div>
    </div>
  );
}

function Star() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="#c9a86a" aria-hidden>
      <path d="M8 1l2.2 4.5 5 .7-3.6 3.5.85 5L8 12.2 3.55 14.7l.85-5L.8 6.2l5-.7L8 1z" />
    </svg>
  );
}
