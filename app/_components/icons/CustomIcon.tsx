import { ComponentPropsWithRef } from "react";

type SvgProps = ComponentPropsWithRef<"svg">;

const Icons = {
  youtube: (props: SvgProps) => (
    <svg
      width="24"
      height="24"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14 12L10.5 14V10L14 12Z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12.7075V11.2924C2 8.39705 2 6.94939 2.90549 6.01792C3.81099 5.08645 5.23656 5.04613 8.08769 4.96549C9.43873 4.92728 10.8188 4.8999 12 4.8999C13.1812 4.8999 14.5613 4.92728 15.9123 4.96549C18.7634 5.04613 20.189 5.08645 21.0945 6.01792C22 6.94939 22 8.39705 22 11.2924V12.7075C22 15.6028 22 17.0505 21.0945 17.9819C20.189 18.9134 18.7635 18.9537 15.9124 19.0344C14.5613 19.0726 13.1812 19.1 12 19.1C10.8188 19.1 9.43867 19.0726 8.0876 19.0344C5.23651 18.9537 3.81097 18.9134 2.90548 17.9819C2 17.0505 2 15.6028 2 12.7075Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  ),
  videoEditing: (props: SvgProps) => (
    <svg
      width="24"
      height="24"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15 12V16.4C15 16.7314 14.7314 17 14.4 17H3.6C3.26863 17 3 16.7314 3 16.4V7.6C3 7.26863 3.26863 7 3.6 7H14.4C14.7314 7 15 7.26863 15 7.6V12ZM15 12L20.0159 7.82009C20.4067 7.49443 21 7.77232 21 8.28103V15.719C21 16.2277 20.4067 16.5056 20.0159 16.1799L15 12Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  github: (props: SvgProps) => (
    <svg
      fill="none"
      height="92"
      viewBox="0 0 92 92"
      width="92"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="m45.6097 21.0479c-14.2184 0-25.7347 11.4704-25.7347 25.6323 0 11.3423 7.3666 20.9224 17.5961 24.3187 1.2867.2243 1.7693-.5447 1.7693-1.2176 0-.6087-.0322-2.6273-.0322-4.774-6.4658 1.1855-8.1386-1.57-8.6533-3.0118-.2895-.7369-1.5441-3.0118-2.6378-3.6205-.9007-.4807-2.1875-1.6661-.0322-1.6982 2.0266-.032 3.4742 1.8584 3.9567 2.6273 2.3162 3.8769 6.0155 2.7875 7.4953 2.1147.2251-1.6661.9007-2.7875 1.6406-3.4283-5.726-.6408-11.7093-2.8516-11.7093-12.656 0-2.7875.9972-5.0944 2.6378-6.8887-.2574-.6408-1.1581-3.2681.2573-6.7926 0 0 2.1553-.6728 7.0771 2.6274 2.0587-.5768 4.2462-.8651 6.4336-.8651 2.1875 0 4.3749.2883 6.4337.8651 4.9218-3.3323 7.0771-2.6274 7.0771-2.6274 1.4154 3.5245.5146 6.1518.2573 6.7926 1.6406 1.7943 2.6378 4.0691 2.6378 6.8887 0 9.8364-6.0155 12.0152-11.7414 12.656.9328.801 1.737 2.3389 1.737 4.742 0 3.4283-.0321 6.1838-.0321 7.0488 0 .6729.4825 1.4739 1.7692 1.2176 10.1652-3.3963 17.5318-13.0084 17.5318-24.3187 0-14.1619-11.5163-25.6323-25.7347-25.6323z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  moon: (props: SvgProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="m0 0h24v24h-24z" fill="#fff" opacity="0" />
      <path
        d="m12.3 22h-.1a10.31 10.31 0 0 1 -7.34-3.15 10.46 10.46 0 0 1 -.26-14 10.13 10.13 0 0 1 4-2.74 1 1 0 0 1 1.06.22 1 1 0 0 1 .24 1 8.4 8.4 0 0 0 1.94 8.81 8.47 8.47 0 0 0 8.83 1.94 1 1 0 0 1 1.27 1.29 10.16 10.16 0 0 1 -2.34 3.63 10.28 10.28 0 0 1 -7.3 3zm-4.84-17.08a7.93 7.93 0 0 0 -1.37 1.22 8.44 8.44 0 0 0 .2 11.32 8.29 8.29 0 0 0 5.93 2.54h.08a8.34 8.34 0 0 0 6.78-3.49 10.37 10.37 0 0 1 -11.62-11.59z"
        fill="currentColor"
      />
    </svg>
  ),
  sun: (props: SvgProps) => (
    <svg
      enableBackground="new 0 0 30 30"
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m4.37 14.62c0-.24.08-.45.25-.62.17-.16.38-.24.6-.24h2.04c.23 0 .42.08.58.25.15.17.23.37.23.61s-.07.44-.22.61-.35.25-.58.25h-2.04c-.23 0-.43-.08-.6-.25s-.26-.37-.26-.61zm2.86 6.93c0-.23.08-.43.23-.61l1.47-1.43c.15-.16.35-.23.59-.23s.44.08.6.23.24.34.24.57c0 .24-.08.46-.24.64l-1.42 1.42c-.41.32-.82.32-1.23 0-.16-.16-.24-.36-.24-.59zm0-13.84c0-.23.08-.43.23-.61.2-.17.41-.25.64-.25.22 0 .42.08.59.24l1.43 1.47c.16.15.24.35.24.59s-.08.44-.24.6-.36.24-.6.24-.44-.08-.59-.24l-1.46-1.43c-.16-.16-.24-.37-.24-.61zm2.55 6.91c0-.93.23-1.8.7-2.6s1.1-1.44 1.91-1.91 1.67-.7 2.6-.7c.7 0 1.37.14 2.02.42.64.28 1.2.65 1.66 1.12.47.47.84 1.02 1.11 1.66s.41 1.32.41 2.02c0 .94-.23 1.81-.7 2.61s-1.1 1.43-1.9 1.9-1.67.7-2.61.7-1.81-.23-2.61-.7-1.43-1.1-1.9-1.9c-.45-.81-.69-1.68-.69-2.62zm1.7 0c0 .98.34 1.81 1.03 2.5.68.69 1.51 1.04 2.49 1.04s1.81-.35 2.5-1.04 1.04-1.52 1.04-2.5c0-.96-.35-1.78-1.04-2.47-.69-.68-1.52-1.02-2.5-1.02-.97 0-1.8.34-2.48 1.02-.7.69-1.04 1.51-1.04 2.47zm2.66 7.78c0-.24.08-.44.25-.6s.37-.24.6-.24c.24 0 .45.08.61.24s.24.36.24.6v1.99c0 .24-.08.45-.25.62s-.37.25-.6.25-.44-.08-.6-.25c-.17-.17-.25-.38-.25-.62zm0-15.5v-2.04c0-.23.08-.43.25-.6s.37-.26.61-.26.43.08.6.25.25.37.25.6v2.05c0 .23-.08.42-.25.58s-.37.23-.6.23-.44-.08-.6-.23-.26-.35-.26-.58zm5.52 13.18c0-.23.08-.42.23-.56.15-.16.34-.23.56-.23.24 0 .44.08.6.23l1.46 1.43c.16.17.24.38.24.61s-.08.43-.24.59c-.4.31-.8.31-1.2 0l-1.42-1.42c-.15-.18-.23-.39-.23-.65zm0-10.92c0-.25.08-.45.23-.59l1.42-1.47c.17-.16.37-.24.59-.24.24 0 .44.08.6.25.17.17.25.37.25.6 0 .25-.08.46-.24.62l-1.46 1.43c-.18.16-.38.24-.6.24-.23 0-.41-.08-.56-.24s-.23-.36-.23-.6zm2.26 5.46c0-.24.08-.44.24-.62.16-.16.35-.24.57-.24h2.02c.23 0 .43.09.6.26s.26.37.26.6-.09.43-.26.6-.37.25-.6.25h-2.02c-.23 0-.43-.08-.58-.25s-.23-.36-.23-.6z"
        fill="currentColor"
      />
    </svg>
  ),
};

type IconName = keyof typeof Icons;

export type CustomIconsProps = {
  name: IconName;
  size?: number;
} & SvgProps;

export const CustomIcon = ({ name, size, ...props }: CustomIconsProps) => {
  const Icon = Icons[name];
  return <Icon width={size} height={size} {...props} />;
};
