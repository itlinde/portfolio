import { Averia_Serif_Libre, Inclusive_Sans, Darumadrop_One } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import { Analytics } from "@vercel/analytics/react"
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

const averiaSerifLibre = Averia_Serif_Libre({
  variable: "--font-averia-serif-libre",
  subsets: ["latin"],
  weight: ['300', '400', '700'],
});

const inclusiveSans = Inclusive_Sans({
  variable: "--font-inclusive-sans",
  subsets: ["latin"],
  weight: ['400'],
});

const darumadropOne = Darumadrop_One({
  variable: "--font-darumadrop-one",
  subsets: ["latin"],
  weight: ['400'],
})

export const metadata = {
  title: "Isabella Linde | Portfolio",
  description: "Isabella Linde's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-20">
      <body
        className={`${averiaSerifLibre.variable} ${inclusiveSans.variable} ${darumadropOne.variable} antialiased`}
      >

        {/* Navbar */}
        <nav id="navbar" className="z-10 sticky top-0 bg-background max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-5">
          {/* Right menu */}
          <div className="flex items-center">
            {/* STILL NOT WORKING: drop down menu doesn't open on small screens */}
            <Link href="/" className="px-3 pr-7 font-darumadrop text-xl">Isabella Linde</Link>
            <div id="navbar-default" className="hidden w-full md:block md:w-auto">
                <ul className="font-base flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                  <li><Link href="/about"       className="font-averia px-3 hover:text-secondary transition ease-in-out duration-100 block py-2 text-textSecondary rounded md:bg-transparent md:p-0">About</Link></li>
                  <li><Link href="/projects"    className="font-averia px-3 hover:text-secondary transition ease-in-out duration-100 block py-2 text-textSecondary rounded md:bg-transparent md:p-0">Projects</Link></li>
                  <li><Link href="/creative-work" className="font-averia px-3 hover:text-secondary transition ease-in-out duration-100 block py-2 text-textSecondary rounded md:bg-transparent md:p-0">Creative Works</Link></li>
                </ul>
            </div>
          </div>

          {/* Right menu */}
          <div className="flex items-center">
            {/* Socials */}
            <a href="mailto:isabellalinde1770@gmail.com" target="_blank">
              <button className="px-2 text-secondary hover:text-textSecondary transition ease-in-out duration-100">
                <span className="sr-only">E-mail</span>
                <svg className="inline w-6 h-6" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M20.0625 -0.00765991H2.86607C2.10619 -0.00684706 1.37767 0.295374 0.840351 0.832691C0.303034 1.37001 0.000812851 2.09853 0 2.85841V15.1416C0.000812851 15.9015 0.303034 16.63 0.840351 17.1673C1.37767 17.7046 2.10619 18.0068 2.86607 18.0076H20.0625C20.8224 18.0068 21.5509 17.7046 22.0882 17.1673C22.6255 16.63 22.9278 15.9015 22.9286 15.1416V2.85841C22.9278 2.09853 22.6255 1.37001 22.0882 0.832691C21.5509 0.295374 20.8224 -0.00684706 20.0625 -0.00765991ZM19.3368 4.73313L11.9669 10.4653C11.8232 10.577 11.6463 10.6376 11.4643 10.6376C11.2823 10.6376 11.1054 10.577 10.9617 10.4653L3.5918 4.73313C3.50521 4.66774 3.43248 4.58579 3.37784 4.49205C3.32319 4.39831 3.28772 4.29464 3.27349 4.18707C3.25925 4.0795 3.26654 3.97018 3.29492 3.86545C3.32331 3.76072 3.37222 3.66268 3.43882 3.57702C3.50543 3.49136 3.58839 3.41979 3.68289 3.36647C3.77739 3.31315 3.88155 3.27914 3.98931 3.26642C4.09707 3.2537 4.20628 3.26253 4.3106 3.29238C4.41491 3.32224 4.51226 3.37252 4.59697 3.44033L11.4643 8.78146L18.3316 3.44033C18.5033 3.31065 18.7192 3.25377 18.9325 3.282C19.1458 3.31023 19.3395 3.42129 19.4716 3.59117C19.6036 3.76104 19.6635 3.97608 19.6383 4.18978C19.6131 4.40348 19.5048 4.59867 19.3368 4.73313Z"/>
                </svg>
              </button>
            </a>
            <a href="https://www.linkedin.com/in/isabellalinde/" target="_blank">
              <button className="px-2 text-secondary hover:text-textSecondary transition ease-in-out duration-100">
                <span className="sr-only">LinkedIn</span>
                  <svg className="inline w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M22.2251 0.5H2.62656C1.68931 0.5 0.928711 1.24271 0.928711 2.15728V21.8405C0.928711 22.7563 1.68931 23.5 2.62656 23.5H22.2251C23.163 23.5 23.9287 22.7563 23.9287 21.8405V2.15728C23.9287 1.24271 23.163 0.5 22.2251 0.5ZM7.75013 20.0992H4.33718V9.1234H7.75013V20.0992ZM6.04366 7.62265C4.9502 7.62265 4.06629 6.73651 4.06629 5.64401C4.06629 4.55311 4.9502 3.66697 6.04366 3.66697C7.13456 3.66697 8.0207 4.55311 8.0207 5.64401C8.0207 6.73651 7.13456 7.62265 6.04366 7.62265ZM20.5266 20.0992H17.1191V14.7619C17.1191 13.4886 17.0942 11.8515 15.3459 11.8515C13.5704 11.8515 13.2998 13.2382 13.2998 14.6696V20.0995H9.88977V9.1234H13.1625V10.6222H13.2091C13.6646 9.75974 14.7776 8.84964 16.4374 8.84964C19.8893 8.84964 20.5269 11.1222 20.5269 14.0786L20.5266 20.0992Z"/>
                  </svg>
              </button>
            </a>
            <a href="https://github.com/itlinde" target="_blank">
              <button className="px-2 text-secondary hover:text-textSecondary transition ease-in-out duration-100">
                <span className="sr-only">GitHub</span>
                  <svg className="inline w-6 h-full" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M12.393 0.0475991C9.38463 0.0170289 6.4872 1.18215 4.33749 3.28691C2.18779 5.39167 0.961707 8.26383 0.928711 11.2722C0.940303 13.6496 1.7051 15.9622 3.11324 17.8778C4.52139 19.7934 6.50043 21.2135 8.76611 21.934C9.33933 22.0382 9.54777 21.6943 9.54777 21.392C9.54777 21.0898 9.54777 20.4228 9.54777 19.4848C6.35861 20.1622 5.68118 17.984 5.68118 17.984C5.46888 17.3002 5.01753 16.7157 4.40969 16.3373C3.36748 15.6494 4.49306 15.6599 4.49306 15.6599C4.8533 15.708 5.19796 15.8371 5.5012 16.0375C5.80443 16.2378 6.05837 16.5042 6.24397 16.8167C6.5674 17.3776 7.0981 17.789 7.72183 17.9625C8.34557 18.1359 9.01248 18.0576 9.57904 17.7443C9.6373 17.1736 9.89575 16.6419 10.3086 16.2435C7.76559 15.9621 5.09754 15.0033 5.09754 10.699C5.0748 9.57617 5.48967 8.48856 6.25439 7.66614C5.90612 6.70217 5.94724 5.64041 6.36904 4.70627C6.36904 4.70627 7.33829 4.40403 9.49566 5.8527C11.3736 5.35227 13.3499 5.35227 15.2278 5.8527C17.4164 4.40403 18.3544 4.70627 18.3544 4.70627C18.7762 5.64041 18.8173 6.70217 18.4691 7.66614C19.2516 8.47348 19.6889 9.5538 19.6885 10.6781C19.6885 14.9929 16.9996 15.9413 14.4774 16.2227C14.7536 16.4908 14.9669 16.8168 15.1021 17.1772C15.2372 17.5376 15.2908 17.9235 15.2591 18.3071V21.3816C15.2591 21.3816 15.4675 22.0382 16.0407 21.9235C18.3 21.1986 20.2724 19.7782 21.6761 17.8653C23.0799 15.9524 23.8433 13.6449 23.8573 11.2722C23.8243 8.26383 22.5982 5.39167 20.4485 3.28691C18.2988 1.18215 15.4014 0.0170289 12.393 0.0475991Z"/>
                  </svg>
              </button>
            </a>

            {/* hamburger menu (hidden on md screens & up) */}
            <Menu>
              <MenuButton className="px-3 items-center text-textSecondary md:hidden hover:text-secondary transition ease-in-out duration-100 focus:ring-0">
                <svg className="inline w-6 h-6" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M27.3792 10.0833H2.33471C1.51856 10.0833 0.856934 10.8986 0.856934 11.9042V12.0958C0.856934 13.1015 1.51856 13.9167 2.33471 13.9167H27.3792C28.1953 13.9167 28.8569 13.1015 28.8569 12.0958V11.9042C28.8569 10.8986 28.1953 10.0833 27.3792 10.0833Z"/>
                  <path fill="currentColor" d="M27.3792 19.6667H2.33471C1.51856 19.6667 0.856934 20.4819 0.856934 21.4875V21.6792C0.856934 22.6848 1.51856 23.5 2.33471 23.5H27.3792C28.1953 23.5 28.8569 22.6848 28.8569 21.6792V21.4875C28.8569 20.4819 28.1953 19.6667 27.3792 19.6667Z"/>
                  <path fill="currentColor" d="M27.3792 0.5H2.33471C1.51856 0.5 0.856934 1.31521 0.856934 2.32083V2.5125C0.856934 3.51812 1.51856 4.33333 2.33471 4.33333H27.3792C28.1953 4.33333 28.8569 3.51812 28.8569 2.5125V2.32083C28.8569 1.31521 28.1953 0.5 27.3792 0.5Z"/>
              </svg>
              </MenuButton>
              <MenuItems anchor="bottom end" transition className="w-52 bg-secondary/40 backdrop-blur-md border-2 border-secondary/50 rounded-xl rounded-tr-none [--anchor-gap:7px] [--anchor-offset:-11px] transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0">
                <MenuItem>
                  <a className="font-averia block data-[focus]:bg-secondary/80 data-[focus]:text-textPrimary py-2 px-4 transition ease-in-out duration-200" href="/about">
                    About
                  </a>
                </MenuItem>
                <MenuItem>
                  <a className="font-averia block data-[focus]:bg-secondary/80 data-[focus]:text-textPrimary py-2 px-4 transition ease-in-out duration-200" href="/projects">
                    Projects
                  </a>
                </MenuItem>
                <MenuItem>
                  <a className="font-averia block data-[focus]:bg-secondary/80 data-[focus]:text-textPrimary py-2 px-4 transition ease-in-out duration-200" href="/creative-work">
                    Creative Works
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </nav>

        {children}

        {/* <div className="my-16 flex flex-col justify-center opacity-50">
          <p className="place-self-center">Designed & developed by Isabella Linde (2025).</p>
          <p className="place-self-center">© Isabella Linde 2025.</p> 
        </div> */}

      </body>
    </html>
  );
}
