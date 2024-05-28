import { FolderGit, Linkedin } from "lucide-react";

export function Header() {
  return (
    <header className="max-w-[1200px] w-full flex items-center justify-between py-4">
      <div className="flex items-center gap-2">
        <FolderGit size={32} />
        <h1 className="text-[#141414] text-2xl">Repo</h1>
      </div>

      <div className="flex items-center gap-4">
        <a href="https://www.linkedin.com/in/douglaspo">
          <Linkedin size={24} color="#3575E2" />
        </a>
      </div>
    </header>
  );
}
