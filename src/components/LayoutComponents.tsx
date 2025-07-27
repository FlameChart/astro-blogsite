import { Separator } from "@/components/ui/separator";
import globalConfig from "@/config/global";
import { cn } from "@/lib/utils";
import * as React from "react";

Object.freeze(globalConfig);

export function ScreenHeightContainer({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("min-h-screen w-full gap-4 bg-teal-50 py-2 px-6 dark:bg-zinc-950", className)} {...props} />
  );
}

export function FooterLinkContainer({ ...props }: React.ComponentProps<"div">) {
  return (
    <div id="footer-container" className="mx-4 flex flex-1 flex-col items-start justify-center py-2 text-teal-100">
      <p className="font-dotted mt-4 text-[30px]">{globalConfig.siteInfos.siteName} &gt;</p>
      <div
        id="footer-link"
        className="scrollbar-hidden my-1 flex w-full flex-1 flex-row flex-nowrap gap-4 overflow-x-scroll overflow-y-hidden pr-4 pb-8 leading-4"
      >
        {globalConfig.footerLinkGroups.map((group) => (
          <div className={group.groupClass}>
            <p className="text-md font-semibold">{group.groupName}</p>
            <Separator />
            {group.groupItems.map((item) => (
              <a href={item.link} className="text-sm leading-4 font-thin">
                {item.name}
              </a>
            ))}
          </div>
        ))}
      </div>
      <Separator />
      <p className="font-fira text-md my-2 mb-8 leading-4">
        The content provided by © Anonym He in this site is licensed under{" "}
        <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>
        <img
          src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"
          alt=""
          style={{ display: "inline-block", maxWidth: "1em", maxHeight: "1em", marginLeft: ".2em" }}
        />
        <img
          src="https://mirrors.creativecommons.org/presskit/icons/by.svg"
          alt=""
          style={{ display: "inline-block", maxWidth: "1em", maxHeight: "1em", marginLeft: ".2em" }}
        />
        <img
          src="https://mirrors.creativecommons.org/presskit/icons/sa.svg"
          alt=""
          style={{
            display: "inline-block",
            maxWidth: "1em",
            maxHeight: "1em",
            marginLeft: ".2em",
            marginRight: ".2em",
          }}
        />
        by default.
      </p>
    </div>
  );
}
