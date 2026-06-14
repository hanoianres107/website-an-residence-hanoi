export type Tier = "studio" | "deluxe" | "family";

export type Apartment = {
  code: string;
  floor: number;
  tier: Tier;
  themeVi: string;
  themeEn: string;
  sizeSqm: number;
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  rate: number;
  amenityKeys: string[];
  storyVi: string;
  storyEn: string;
  photo: string;
  photoFolder: string;
};

export const TIER_ORDER: Tier[] = ["studio", "deluxe", "family"];

export const TIER_DEFAULT_RATE: Record<Tier, number> = {
  studio: 1850000,
  deluxe: 2950000,
  family: 5200000,
};

export const APARTMENTS: Apartment[] = [
  {
    code: "601",
    floor: 6,
    tier: "deluxe",
    themeVi: "Tìm AN",
    themeEn: "SEE by AN",
    sizeSqm: 85,
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    rate: 3200000,
    amenityKeys: ["lakeView", "outdoorBath", "balcony", "kitchen", "kingBed", "bathtub", "workspace", "wifi"],
    storyVi:
      "Căn duy nhất ở AN có bồn tắm ngoài trời nhìn thẳng ra Hồ Ba Mẫu. Sàn gỗ óc chó, tường son mài đỏ, một góc đọc sách ngay bên cửa sổ. Hoàng hôn từ ban công là khoảnh khắc khách hay viết review nhất.",
    storyEn:
      "The only apartment at AN with an outdoor soaking tub facing Ba Mau Lake. Walnut floor, vermilion lacquered wall, a reading nook by the window. The sunset from this balcony is what guests write home about.",
    photo: "/photos/AN-601-1.jpg",
    photoFolder: "AN. 601",
  },
  {
    code: "602",
    floor: 6,
    tier: "family",
    themeVi: "Thở An Nhiên",
    themeEn: "Breathing An Nhiên",
    sizeSqm: 125,
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 5,
    rate: 6200000,
    amenityKeys: ["lakeView", "fullKitchen", "twoBed", "balcony", "diningSix", "bathtub", "workspace", "wifi"],
    storyVi:
      "Căn lớn nhất AN — 125m² cho gia đình ba thế hệ. Phòng khách kéo dài bằng cả tầng nhà phố. Bàn ăn sáu chỗ, bếp đủ nấu một bữa Hà Nội. Hai phòng ngủ — một king, một twin — đều mở ra ban công riêng.",
    storyEn:
      "The largest apartment at AN — 125m² for three-generation families. A living room that stretches the length of a townhouse floor. A dining table for six, a kitchen ready for a real Hanoi meal. Two bedrooms — king and twin — both open to private balconies.",
    photo: "/photos/AN-602-1.jpg",
    photoFolder: "AN. 602",
  },
  {
    code: "603",
    floor: 6,
    tier: "studio",
    themeVi: "Mộng An",
    themeEn: "Peaceful Dream",
    sizeSqm: 70,
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    rate: 2100000,
    amenityKeys: ["lakeView", "kitchenette", "balcony", "kingBed", "bathtub", "workspace", "wifi"],
    storyVi:
      "Tầng cao nhất AN — căn 70m² lặng nhất tòa. Trần cao, cửa sổ kéo từ sàn lên trần, view ngắm hồ và một mảnh trời. Đến đây để ngủ thật ngon.",
    storyEn:
      "AN's highest floor — a 70m² apartment, the quietest in the building. High ceilings, floor-to-ceiling windows, a view of lake and sky. Come here to sleep deeply.",
    photo: "/photos/AN-603-1.jpg",
    photoFolder: "AN. 603",
  },
  {
    code: "501",
    floor: 5,
    tier: "deluxe",
    themeVi: "Chuồn Chuồn Đỏ",
    themeEn: "Red Dragonfly",
    sizeSqm: 85,
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    rate: 3000000,
    amenityKeys: ["lakeView", "balcony", "kitchen", "kingBed", "bathtub", "workspace", "wifi"],
    storyVi:
      "Căn signature của AN — chuồn chuồn son đỏ vẽ tay trên tường đầu giường. Sàn gạch An Nam quatrefoil, đèn mây Bát Tràng, bồn tắm soaking ngả về phía cửa sổ.",
    storyEn:
      "AN's signature room — a hand-painted red dragonfly on the headboard wall. Annam quatrefoil tile floors, Bat Trang rattan lamps, a soaking tub tilted toward the window.",
    photo: "/photos/AN-501-1.jpg",
    photoFolder: "AN. 501",
  },
  {
    code: "502",
    floor: 5,
    tier: "family",
    themeVi: "Chạm",
    themeEn: "Touch by AN",
    sizeSqm: 120,
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 5,
    rate: 5800000,
    amenityKeys: ["lakeView", "fullKitchen", "twoBed", "balcony", "diningSix", "bathtub", "wifi"],
    storyVi:
      "Căn family signature — bàn ăn gỗ óc chó dài 2m6, bếp đảo trung tâm, mảng tường son mài chạy dọc phòng khách. Là căn được các gia đình ba thế hệ chọn nhiều nhất.",
    storyEn:
      "The signature family suite — a 2.6m walnut dining table, a kitchen island, a lacquered wall running the length of the living room. The most popular pick for multi-generation families.",
    photo: "/photos/AN-502-1.jpg",
    photoFolder: "AN. 502",
  },
  {
    code: "503",
    floor: 5,
    tier: "studio",
    themeVi: "Mộng An",
    themeEn: "Peaceful Dream",
    sizeSqm: 70,
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    rate: 1950000,
    amenityKeys: ["lakeView", "kitchenette", "balcony", "kingBed", "bathtub", "wifi"],
    storyVi:
      "Studio 70m² tầng năm — view hồ và mặt phố Ô Đồng Lầm. Tone gỗ ngả nâu, một góc bàn làm việc, một bình trà.",
    storyEn:
      "A 70m² studio on the fifth floor — overlooking both lake and O Dong Lam street. Walnut tones, a small writing desk, a teapot.",
    photo: "/photos/AN-503-1.jpg",
    photoFolder: "AN. 503",
  },
  {
    code: "401",
    floor: 4,
    tier: "deluxe",
    themeVi: "Mộc An",
    themeEn: "Rustic Peace",
    sizeSqm: 85,
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    rate: 2850000,
    amenityKeys: ["treeBalcony", "kitchen", "kingBed", "bathtub", "workspace", "wifi"],
    storyVi:
      "Ban công của AN. 401 nhìn vào tán bằng lăng — mùa hạ tím rượi, mùa thu rụng vàng. Vật liệu mộc: tre, gỗ thông tự nhiên, vải lanh.",
    storyEn:
      "AN. 401 opens onto the crown of a bằng lăng tree — purple in summer, gold in autumn. Materials kept raw: bamboo, natural pine, linen.",
    photo: "/photos/AN-401-1.jpg",
    photoFolder: "AN. 401",
  },
  {
    code: "402",
    floor: 4,
    tier: "family",
    themeVi: "Cảm tác Đông Dương",
    themeEn: "The Indochine",
    sizeSqm: 102,
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4,
    rate: 5400000,
    amenityKeys: ["fullKitchen", "twoBed", "balcony", "diningFour", "bathtub", "wifi"],
    storyVi:
      "Pha trộn rõ nét nhất tinh thần Đông Dương: cửa chớp gỗ, sàn gạch họa tiết, đèn đồng. Hai phòng ngủ đối xứng qua phòng khách trung tâm.",
    storyEn:
      "The most explicit Indochine reading at AN: louvre wooden shutters, patterned tile floors, brass lamps. Two bedrooms mirrored across a central living room.",
    photo: "/photos/AN-402-1.jpg",
    photoFolder: "AN. 402",
  },
  {
    code: "403",
    floor: 4,
    tier: "studio",
    themeVi: "Mộng An",
    themeEn: "Peaceful Dream",
    sizeSqm: 70,
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    rate: 1850000,
    amenityKeys: ["kitchenette", "balcony", "kingBed", "bathtub", "wifi"],
    storyVi: "Studio 70m² yên tĩnh tầng tư — phù hợp khách công tác dài ngày.",
    storyEn: "A quiet 70m² studio on the fourth floor — ideal for longer business stays.",
    photo: "/photos/AN-403-1.jpg",
    photoFolder: "AN. 403",
  },
  {
    code: "301",
    floor: 3,
    tier: "deluxe",
    themeVi: "An Giản",
    themeEn: "Simple Peace",
    sizeSqm: 85,
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    rate: 2800000,
    amenityKeys: ["kitchen", "kingBed", "bathtub", "workspace", "wifi"],
    storyVi: "Minimalist Indochine — bớt một, bớt hai. Tường trắng, ván sàn ngả nâu, một bức tranh sơn mài duy nhất.",
    storyEn: "Minimalist Indochine — subtract once, subtract twice. White walls, walnut floor, a single lacquer panel.",
    photo: "/photos/AN-301-1.jpg",
    photoFolder: "AN. 301",
  },
  {
    code: "302",
    floor: 3,
    tier: "family",
    themeVi: "An Cư",
    themeEn: "Peaceful Dwelling",
    sizeSqm: 102,
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4,
    rate: 5200000,
    amenityKeys: ["fullKitchen", "twoBed", "balcony", "diningFour", "bathtub", "wifi"],
    storyVi: "Căn family bán chạy nhất theo mùa — bếp đủ dùng cho 4 người, bàn ăn 4 chỗ, phòng khách nhỏ ấm cúng.",
    storyEn: "A bestselling family unit — a kitchen for four, a 4-seat dining table, a cozy living room.",
    photo: "/photos/AN-302-1.jpg",
    photoFolder: "AN. 302",
  },
  {
    code: "303",
    floor: 3,
    tier: "studio",
    themeVi: "Mộng An",
    themeEn: "Peaceful Dream",
    sizeSqm: 70,
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    rate: 1800000,
    amenityKeys: ["kitchenette", "balcony", "kingBed", "bathtub", "wifi"],
    storyVi: "Studio tầng ba — vừa đủ riêng tư, vừa đủ tiện đi xuống lobby.",
    storyEn: "A third-floor studio — private enough, near enough to the lobby.",
    photo: "/photos/AN-303-1.jpg",
    photoFolder: "AN. 303",
  },
  {
    code: "201",
    floor: 2,
    tier: "deluxe",
    themeVi: "An Giản",
    themeEn: "Simple Peace",
    sizeSqm: 85,
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    rate: 2700000,
    amenityKeys: ["gardenView", "kitchen", "kingBed", "bathtub", "wifi"],
    storyVi: "Ban công nhìn vào sân vườn nội bộ — buổi sáng chim hót, không tiếng còi xe.",
    storyEn: "A balcony onto the inner garden — birdsong in the morning, no street horns.",
    photo: "/photos/AN-201-1.jpg",
    photoFolder: "AN. 201",
  },
  {
    code: "202",
    floor: 2,
    tier: "family",
    themeVi: "An Cư",
    themeEn: "Peaceful Dwelling",
    sizeSqm: 102,
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4,
    rate: 5100000,
    amenityKeys: ["fullKitchen", "twoBed", "balcony", "diningFour", "bathtub", "wifi"],
    storyVi: "Family suite tầng hai — tiện cho ông bà không phải đi thang máy nhiều. Hai phòng ngủ riêng, phòng khách rộng.",
    storyEn: "A second-floor family suite — easy for grandparents who'd rather not ride the elevator twice. Two private bedrooms, a generous living room.",
    photo: "/photos/AN-202-1.jpg",
    photoFolder: "AN.202",
  },
  {
    code: "203",
    floor: 2,
    tier: "studio",
    themeVi: "An Tĩnh",
    themeEn: "Zen by AN",
    sizeSqm: 70,
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    rate: 2000000,
    amenityKeys: ["kitchenette", "balcony", "kingBed", "bathtub", "wifi"],
    storyVi:
      "Cảm hứng Nhật — tone trầm, tatami corner, ánh đèn vàng dịu. Studio để ngồi yên đọc sách.",
    storyEn:
      "A Japanese inflection — quiet tones, a tatami corner, warm dim lighting. A studio for sitting still and reading.",
    photo: "/photos/AN-203-1.jpg",
    photoFolder: "AN.203",
  },
];

export function findApartment(code: string): Apartment | undefined {
  return APARTMENTS.find((a) => a.code === code);
}

// Number of real photo files per apartment in /public/photos (AN-{code}-{n}.jpg).
// Single source of truth — used by the detail photo grid and the gallery.
export const APT_PHOTO_COUNT: Record<string, number> = {
  "201": 3, "202": 3, "203": 3,
  "301": 3, "302": 3, "303": 3,
  "401": 3, "402": 3, "403": 3,
  "501": 4, "502": 4, "503": 4,
  "601": 5, "602": 4, "603": 4,
};

export function apartmentPhotos(code: string): string[] {
  const n = APT_PHOTO_COUNT[code] ?? 3;
  return Array.from({ length: n }, (_, i) => `/photos/AN-${code}-${i + 1}.jpg`);
}
