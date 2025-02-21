import React from "react";
import { useTypeSafeTranslation } from "../shared-hooks/useTypeSafeTranslation";

export interface ProfileTabsProps extends React.HTMLAttributes<HTMLDivElement> {
  activeTab: string;
}

export const ProfileTabs: React.FC<ProfileTabsProps> = ({
  activeTab,
  className,
  ...props
}) => {
  const { t } = useTypeSafeTranslation();
  return (
    <div
      className={`w-full flex items-center justify-around ${className}`}
      {...props}
    >
      <button
        className={`py-1 text-primary-100 text-base font-bold border-b-2 border-primary-900 transition hover:border-accent focus:outline-no-chrome
               ${activeTab === "about" && `border-accent text-accent`}`}
      >
        {t("pages.viewUser.profileTabs.about")}
      </button>
      <button
        className={`py-1 text-primary-100 text-base font-bold border-b-2 border-primary-900 transition hover:border-accent filter blur-sm opacity-0 focus:outline-no-chrome
               ${activeTab === "rooms" && `border-accent text-accent`}`}
      >
        {t("pages.viewUser.profileTabs.rooms")}
      </button>
      <button
        className={`py-1 text-primary-100 text-base font-bold border-b-2 border-primary-900 transition hover:border-accent filter blur-sm opacity-0 focus:outline-no-chrome
               ${activeTab === "scheduled" && `border-accent text-accent`}`}
      >
        {t("pages.viewUser.profileTabs.scheduled")}
      </button>
      <button
        className={`py-1 text-primary-100 text-base font-bold border-b-2 border-primary-900 transition hover:border-accent filter blur-sm opacity-0 focus:outline-no-chrome
               ${activeTab === "recorded" && `border-accent text-accent`}`}
      >
        {t("pages.viewUser.profileTabs.recorded")}
      </button>
      <button
        className={`py-1 text-primary-100 text-base font-bold border-b-2 border-primary-900 transition hover:border-accent filter blur-sm opacity-0 focus:outline-no-chrome
               ${activeTab === "clips" && `border-accent text-accent`}`}
      >
        {t("pages.viewUser.profileTabs.clips")}
      </button>
    </div>
  );
};
