import { Separator } from "@/components/ui/separator"

export function FooterLinkContainer() {
  return (
    <div id="footer-container" className="mx-4 flex flex-1 flex-col items-start justify-center py-2 text-teal-100">
      <p className="font-dotted mt-4 text-4xl">welki's space</p>
      <div
        id="footer-link"
        className="scrollbar-hidden my-1 flex w-full flex-1 flex-row flex-nowrap gap-4 overflow-x-scroll overflow-y-hidden pr-4 pb-8 leading-4"
      >
        <div className="font-fira flex min-w-32 flex-1 flex-col gap-1">
          <p className="text-md font-semibold">Space</p>
          <Separator />
          <a href="/" className="text-sm font-thin">Home</a>
          <a href="/blogs" className="text-sm font-thin">Blogs</a>
          <a href="/about-me" className="text-sm font-thin">About Me</a>
        </div>
        <div className="font-fira flex min-w-40 flex-1 flex-col gap-1">
          <p className="text-md font-semibold">Projects</p>
          <Separator />
          <a href="#" className="text-sm font-thin">Personal Sites</a>
          <a href="#" className="text-sm leading-4 font-thin">MuseDash<br />Loader Companion</a>
        </div>
        <div className="font-fira flex min-w-32 flex-1 flex-col gap-1">
          <p className="text-md font-semibold">Social</p>
          <Separator />
          <a href="#" className="text-sm font-thin">GitHub</a>
          <a href="#" className="text-sm font-thin">LinkedIn</a>
        </div>
      </div>
      <Separator />
      <p className="font-fira text-md my-2 leading-5">
        The content provided by © Anonym He in this site is licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>
        <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style={{ display: "inline-block", maxWidth: "1em", maxHeight: "1em", marginLeft: ".2em" }} />
        <img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="" style={{ display: "inline-block", maxWidth: "1em", maxHeight: "1em", marginLeft: ".2em" }} />
        <img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" alt="" style={{ display: "inline-block", maxWidth: "1em", maxHeight: "1em", marginLeft: ".2em", marginRight: ".2em" }} />
        by default.
      </p>
    </div>
  )
}
