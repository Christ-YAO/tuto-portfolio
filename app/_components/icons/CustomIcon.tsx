import { ComponentPropsWithRef } from "react";

type SvgProps = ComponentPropsWithRef<"svg">;

const Icons = {
  youtube: (props: SvgProps) => (
    <svg
      width="24"
      height="24"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14 12L10.5 14V10L14 12Z"
        fill="currentColor"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2 12.7075V11.2924C2 8.39705 2 6.94939 2.90549 6.01792C3.81099 5.08645 5.23656 5.04613 8.08769 4.96549C9.43873 4.92728 10.8188 4.8999 12 4.8999C13.1812 4.8999 14.5613 4.92728 15.9123 4.96549C18.7634 5.04613 20.189 5.08645 21.0945 6.01792C22 6.94939 22 8.39705 22 11.2924V12.7075C22 15.6028 22 17.0505 21.0945 17.9819C20.189 18.9134 18.7635 18.9537 15.9124 19.0344C14.5613 19.0726 13.1812 19.1 12 19.1C10.8188 19.1 9.43867 19.0726 8.0876 19.0344C5.23651 18.9537 3.81097 18.9134 2.90548 17.9819C2 17.0505 2 15.6028 2 12.7075Z"
        stroke="currentColor"
        stroke-width="1.5"
      />
    </svg>
  ),
  videoEditing: (props: SvgProps) => (
    <svg
      width="24"
      height="24"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15 12V16.4C15 16.7314 14.7314 17 14.4 17H3.6C3.26863 17 3 16.7314 3 16.4V7.6C3 7.26863 3.26863 7 3.6 7H14.4C14.7314 7 15 7.26863 15 7.6V12ZM15 12L20.0159 7.82009C20.4067 7.49443 21 7.77232 21 8.28103V15.719C21 16.2277 20.4067 16.5056 20.0159 16.1799L15 12Z"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
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
        clip-rule="evenodd"
        d="m45.6097 21.0479c-14.2184 0-25.7347 11.4704-25.7347 25.6323 0 11.3423 7.3666 20.9224 17.5961 24.3187 1.2867.2243 1.7693-.5447 1.7693-1.2176 0-.6087-.0322-2.6273-.0322-4.774-6.4658 1.1855-8.1386-1.57-8.6533-3.0118-.2895-.7369-1.5441-3.0118-2.6378-3.6205-.9007-.4807-2.1875-1.6661-.0322-1.6982 2.0266-.032 3.4742 1.8584 3.9567 2.6273 2.3162 3.8769 6.0155 2.7875 7.4953 2.1147.2251-1.6661.9007-2.7875 1.6406-3.4283-5.726-.6408-11.7093-2.8516-11.7093-12.656 0-2.7875.9972-5.0944 2.6378-6.8887-.2574-.6408-1.1581-3.2681.2573-6.7926 0 0 2.1553-.6728 7.0771 2.6274 2.0587-.5768 4.2462-.8651 6.4336-.8651 2.1875 0 4.3749.2883 6.4337.8651 4.9218-3.3323 7.0771-2.6274 7.0771-2.6274 1.4154 3.5245.5146 6.1518.2573 6.7926 1.6406 1.7943 2.6378 4.0691 2.6378 6.8887 0 9.8364-6.0155 12.0152-11.7414 12.656.9328.801 1.737 2.3389 1.737 4.742 0 3.4283-.0321 6.1838-.0321 7.0488 0 .6729.4825 1.4739 1.7692 1.2176 10.1652-3.3963 17.5318-13.0084 17.5318-24.3187 0-14.1619-11.5163-25.6323-25.7347-25.6323z"
        fill="#fff"
        fill-rule="evenodd"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
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
