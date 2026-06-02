import { BRAND } from "@/lib/constants";

export function AnnouncementBar() {
  return (
    <div className="bg-warmBrown text-warmWhite text-center py-2 px-4 text-sm font-display font-medium" role="banner">
      <p>{BRAND.announcementBar}</p>
    </div>
  );
}
