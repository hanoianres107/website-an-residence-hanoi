"use client";

import Link from "next/link";
import { Apartment, apartmentPhotos } from "@/lib/apartments";
import { roomType, formatVnd } from "@/lib/roomTypes";
import { useLang } from "@/lib/lang";
import { AMENITIES, COMMON_AMENITIES } from "@/lib/amenities";
import { AmenityIcon } from "@/components/AmenityIcon";
import { StayGallery } from "@/components/StayGallery";

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

const MAP_EMBED =
  "https://www.google.com/maps?q=107+%C3%94+%C4%90%E1%BB%93ng+L%E1%BA%A7m,+%C4%90%E1%BB%91ng+%C4%90a,+H%C3%A0+N%E1%BB%99i&output=embed";

export function ApartmentDetailClient({ apartment: apt }: { apartment: Apartment }) {
  const { lang, t } = useLang();
  const rt = roomType(apt.tier);
  const copy = t.tiers[apt.tier];
  const theme = lang === "vi" ? apt.themeVi : apt.themeEn;
  const reviews = lang === "vi" ? REVIEWS_VI : REVIEWS_EN;
  const photos = apartmentPhotos(apt.code).map((src, i) => ({ src, alt: `AN.${apt.code} ${apt.themeEn} — ${rt.name}, photo ${i + 1}` }));
  const price = formatVnd(rt.fromRate, lang);
  const wa = `https://wa.me/84905991979?text=${encodeURIComponent(
    lang === "vi"
      ? `Xin chào AN Residence Hanoi! Tôi muốn hỏi phòng trống căn AN.${apt.code} (${rt.name}).`
      : `Hello AN Residence Hanoi! I'd like to check availability for AN.${apt.code} (${rt.name}).`,
  )}`;

  const facts = [
    { k: t.booking.roomLabel, v: rt.name },
    { k: lang === "vi" ? "Diện tích" : "Size", v: `${apt.sizeSqm} m²` },
    { k: lang === "vi" ? "Giường" : "Beds", v: copy.beds },
    { k: t.booking.guests, v: t.home.sleeps(rt.sleeps) },
  ];

  return (
    <article>
      <section className="mx-auto max-w-[1280px] px-6 pt-6 lg:px-10">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-ash">
          <Link href="/" className="underline-offset-2 hover:text-ink hover:underline">
            {t.detail.home}
          </Link>
          <span aria-hidden className="text-stone">/</span>
          <Link href="/apartments" className="underline-offset-2 hover:text-ink hover:underline">
            {t.detail.backToAll}
          </Link>
          <span aria-hidden className="text-stone">/</span>
          <span className="font-medium text-ink" aria-current="page">
            AN.{apt.code}
          </span>
        </nav>

        <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-son sm:text-sm">
          AN.{apt.code} · {t.detail.floor} {apt.floor} · {rt.name}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{theme}</h1>
        <p className="mt-1 text-lg text-ash">
          {apt.sizeSqm} m² · {copy.beds} · {t.home.sleeps(rt.sleeps)}
        </p>

        <div className="mt-6">
          <StayGallery images={photos} />
        </div>
      </section>

      <section className="mx-auto mt-12 grid max-w-[1280px] grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:px-10">
        <div className="space-y-10 lg:col-span-7">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">{t.detail.storyEyebrow}</h2>
            <p className="mt-4 text-[17px] leading-relaxed">{lang === "vi" ? apt.storyVi : apt.storyEn}</p>
          </div>

          <div className="border-t border-hairline pt-8">
            <h2 className="text-2xl font-bold tracking-tight">{t.detail.amenitiesTitle}</h2>
            <div className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {[
                ...apt.amenityKeys.map((key) => AMENITIES[key]).filter(Boolean),
                ...Object.values(COMMON_AMENITIES).slice(0, 6),
              ].map((meta) => (
                <div key={meta.en} className="flex items-center gap-3">
                  <AmenityIcon name={meta.icon} className="h-5 w-5 text-ash" />
                  <span className="text-[15px]">{lang === "vi" ? meta.vi : meta.en}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-hairline pt-8">
            <h2 className="text-2xl font-bold tracking-tight">{t.detail.knowTitle}</h2>
            <div className="mt-5 grid gap-6 sm:grid-cols-2">
              {t.detail.know.map((item) => (
                <div key={item.h}>
                  <h3 className="text-[15px] font-bold">{item.h}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ash">{item.b}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-hairline pt-8">
            <h2 className="text-2xl font-bold tracking-tight">{t.detail.reviewsTitle}</h2>
            <p className="mt-2 text-sm text-ash">
              {lang === "vi" ? "Trích từ Google Maps · " : "From Google Maps · "}
              <a className="underline" href="https://www.google.com/maps/place/Hanoi+AN+Residence" target="_blank" rel="noreferrer">
                {lang === "vi" ? "Xem tất cả" : "See all"}
              </a>
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {reviews.map((r) => (
                <div key={r.name}>
                  <div className="text-sm font-bold leading-tight">{r.name}</div>
                  <div className="text-xs text-ash">
                    {r.meta} · {r.date}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-walnut">{r.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-hairline pt-8">
            <h2 className="text-2xl font-bold tracking-tight">{t.home.locationTitle}</h2>
            <p className="mt-2 text-[15px] text-ash">{t.home.locationBody}</p>
            <div className="relative mt-4 aspect-[16/9] overflow-hidden rounded-[20px] border border-hairline">
              <iframe src={MAP_EMBED} className="absolute inset-0 h-full w-full" loading="lazy" title="Hanoi AN Residence — map" />
            </div>
          </div>
        </div>

        <aside className="lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            <div className="elevation-card rounded-[20px] border border-hairline bg-paper p-6">
              <div className="text-2xl font-bold">{t.home.bookTitle}</div>
              <p className="mt-2 text-sm text-ash">{t.home.bookLead}</p>
              <div className="mt-5 flex flex-wrap items-baseline gap-x-2">
                <span className="text-xs text-ash">{t.home.from}</span>
                <span className="text-2xl font-bold tabular-nums">{price}</span>
                <span className="text-xs text-ash">{t.home.perNight}</span>
              </div>
              <p className="mt-1 text-xs text-ash">{t.home.roomsNote}</p>
              <div className="mt-6 space-y-2">
                <a
                  href={wa}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center rounded-full bg-ink py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-black"
                >
                  {t.home.roomCta}
                </a>
                <a
                  href="tel:+84905991979"
                  className="w-full inline-flex items-center justify-center rounded-full border border-hairline bg-paper py-3.5 text-sm font-semibold text-ink transition-colors hover:border-ink"
                >
                  {t.detail.callCta} · +84 905 991 979
                </a>
              </div>
              <div className="mt-6 space-y-2 border-t border-hairline pt-6 text-[13px] text-ash">
                {facts.map((f) => (
                  <div key={f.k} className="flex justify-between gap-4">
                    <span>{f.k}</span>
                    <span className="text-right text-ink">{f.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </section>

      {/* Phones: the booking card sits below the content, so keep price + action in reach */}
      <div className="sticky bottom-0 z-30 mt-16 flex items-center justify-between gap-4 border-t border-hairline bg-paper p-4 lg:hidden">
        <div>
          <div className="text-xs text-ash">{t.home.from}</div>
          <div className="text-lg font-bold leading-tight tabular-nums">
            {price} <span className="text-xs font-medium text-ash">{t.home.perNight}</span>
          </div>
        </div>
        <a href={wa} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper">
          {t.home.roomCta}
        </a>
      </div>
    </article>
  );
}
