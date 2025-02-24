export const EditSquare = ({color = '#999', onClick, size = '20', className = ''}: any) => {
  return (
    <svg
      onClick={onClick}
      width={size}
      height={size}
      className={className}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M11.4923 2.789H7.7533C4.6783 2.789 2.75031 4.966 2.75031 8.048V16.362C2.75031 19.444 4.6693 21.621 7.7533 21.621H16.5773C19.6623 21.621 21.5813 19.444 21.5813 16.362V12.334'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.8278 10.9209L16.3008 3.4479C17.2318 2.5179 18.7408 2.5179 19.6718 3.4479L20.8888 4.6649C21.8198 5.5959 21.8198 7.1059 20.8888 8.0359L13.3798 15.5449C12.9728 15.9519 12.4208 16.1809 11.8448 16.1809H8.0988L8.1928 12.4009C8.2068 11.8449 8.4338 11.3149 8.8278 10.9209Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.1652 4.60251L19.7312 9.16851'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
export const Document = ({color = '#999', onClick, size = '20', className = ''}: any) => {
  return (
    <svg
      onClick={onClick}
      width={size}
      height={size}
      className={className}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M15.7162 16.2234H8.4962'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.7162 12.0369H8.4962'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11.2513 7.86008H8.4963'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.9086 2.74979C15.9086 2.74979 8.2316 2.75379 8.2196 2.75379C5.4596 2.77079 3.7506 4.58679 3.7506 7.35679V16.5528C3.7506 19.3368 5.4726 21.1598 8.2566 21.1598C8.2566 21.1598 15.9326 21.1568 15.9456 21.1568C18.7056 21.1398 20.4156 19.3228 20.4156 16.5528V7.35679C20.4156 4.57279 18.6926 2.74979 15.9086 2.74979Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
export const Trash = ({color = '#999', onClick, size = '20', className = ''}: any) => {
  return (
    <svg
      onClick={onClick}
      width={size}
      height={size}
      className={className}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g strokeWidth='0' />
      <g strokeLinecap='round' strokeLinejoin='round' stroke={color} strokeWidth='0.15' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.3094 2.25002H13.6908C13.9072 2.24988 14.0957 2.24976 14.2737 2.27819C14.977 2.39049 15.5856 2.82915 15.9146 3.46084C15.9978 3.62073 16.0573 3.79961 16.1256 4.00494L16.2373 4.33984C16.2562 4.39653 16.2616 4.41258 16.2661 4.42522C16.4413 4.90933 16.8953 5.23659 17.4099 5.24964C17.4235 5.24998 17.44 5.25004 17.5001 5.25004H20.5001C20.9143 5.25004 21.2501 5.58582 21.2501 6.00004C21.2501 6.41425 20.9143 6.75004 20.5001 6.75004H3.5C3.08579 6.75004 2.75 6.41425 2.75 6.00004C2.75 5.58582 3.08579 5.25004 3.5 5.25004H6.50008C6.56013 5.25004 6.5767 5.24998 6.59023 5.24964C7.10488 5.23659 7.55891 4.90936 7.73402 4.42524C7.73863 4.41251 7.74392 4.39681 7.76291 4.33984L7.87452 4.00496C7.94281 3.79964 8.00233 3.62073 8.08559 3.46084C8.41453 2.82915 9.02313 2.39049 9.72643 2.27819C9.90445 2.24976 10.093 2.24988 10.3094 2.25002ZM9.00815 5.25004C9.05966 5.14902 9.10531 5.04404 9.14458 4.93548C9.1565 4.90251 9.1682 4.86742 9.18322 4.82234L9.28302 4.52292C9.37419 4.24941 9.39519 4.19363 9.41601 4.15364C9.52566 3.94307 9.72853 3.79686 9.96296 3.75942C10.0075 3.75231 10.067 3.75004 10.3553 3.75004H13.6448C13.9331 3.75004 13.9927 3.75231 14.0372 3.75942C14.2716 3.79686 14.4745 3.94307 14.5842 4.15364C14.605 4.19363 14.626 4.2494 14.7171 4.52292L14.8169 4.82216L14.8556 4.9355C14.8949 5.04405 14.9405 5.14902 14.992 5.25004H9.00815Z'
        fill={color}
      />
      <path
        d='M5.91509 8.45015C5.88754 8.03685 5.53016 7.72415 5.11686 7.7517C4.70357 7.77925 4.39086 8.13663 4.41841 8.54993L4.88186 15.5017C4.96736 16.7844 5.03642 17.8205 5.19839 18.6336C5.36679 19.4789 5.65321 20.185 6.2448 20.7385C6.8364 21.2919 7.55995 21.5308 8.4146 21.6425C9.23662 21.7501 10.275 21.7501 11.5606 21.75H12.4395C13.7251 21.7501 14.7635 21.7501 15.5856 21.6425C16.4402 21.5308 17.1638 21.2919 17.7554 20.7385C18.347 20.185 18.6334 19.4789 18.8018 18.6336C18.9638 17.8206 19.0328 16.7844 19.1183 15.5017L19.5818 8.54993C19.6093 8.13663 19.2966 7.77925 18.8833 7.7517C18.47 7.72415 18.1126 8.03685 18.0851 8.45015L17.6251 15.3493C17.5353 16.6971 17.4713 17.6349 17.3307 18.3406C17.1943 19.025 17.004 19.3873 16.7306 19.6431C16.4572 19.8989 16.083 20.0647 15.391 20.1552C14.6776 20.2485 13.7376 20.25 12.3868 20.25H11.6134C10.2626 20.25 9.32255 20.2485 8.60915 20.1552C7.91715 20.0647 7.54299 19.8989 7.26958 19.6431C6.99617 19.3873 6.80583 19.025 6.66948 18.3406C6.52892 17.6349 6.46489 16.6971 6.37503 15.3493L5.91509 8.45015Z'
        fill={color}
      />
      <path
        d='M9.42546 10.2538C9.83762 10.2125 10.2052 10.5133 10.2464 10.9254L10.7464 15.9254C10.7876 16.3376 10.4869 16.7051 10.0747 16.7463C9.66256 16.7875 9.29503 16.4868 9.25381 16.0747L8.75381 11.0747C8.7126 10.6625 9.01331 10.295 9.42546 10.2538Z'
        fill={color}
      />
      <path
        d='M14.5747 10.2538C14.9869 10.295 15.2876 10.6625 15.2464 11.0747L14.7464 16.0747C14.7052 16.4868 14.3376 16.7875 13.9255 16.7463C13.5133 16.7051 13.2126 16.3376 13.2538 15.9254L13.7538 10.9254C13.795 10.5133 14.1626 10.2125 14.5747 10.2538Z'
        fill={color}
      />
    </svg>
  )
}
export const Home = ({color = '#999', onClick, size = '20', className = ''}: any) => {
  return (
    <svg
      onClick={onClick}
      width={size}
      height={size}
      className={className}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M9.15722 20.7714V17.7047C9.1572 16.9246 9.79312 16.2908 10.581 16.2856H13.4671C14.2587 16.2856 14.9005 16.9209 14.9005 17.7047V17.7047V20.7809C14.9003 21.4432 15.4343 21.9845 16.103 22H18.0271C19.9451 22 21.5 20.4607 21.5 18.5618V18.5618V9.83784C21.4898 9.09083 21.1355 8.38935 20.538 7.93303L13.9577 2.6853C12.8049 1.77157 11.1662 1.77157 10.0134 2.6853L3.46203 7.94256C2.86226 8.39702 2.50739 9.09967 2.5 9.84736V18.5618C2.5 20.4607 4.05488 22 5.97291 22H7.89696C8.58235 22 9.13797 21.4499 9.13797 20.7714V20.7714'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
export const Message = ({color = '#999', onClick, size = '20', className = ''}: any) => {
  return (
    <svg
      onClick={onClick}
      width={size}
      height={size}
      className={className}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M17.2677 9.06113L13.0023 12.4954C12.1951 13.1283 11.0635 13.1283 10.2563 12.4954L5.95424 9.06113'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.88787 3.5H16.3158C17.6752 3.51525 18.969 4.08993 19.896 5.0902C20.823 6.09048 21.3022 7.42903 21.222 8.79412V15.322C21.3022 16.6871 20.823 18.0256 19.896 19.0259C18.969 20.0262 17.6752 20.6009 16.3158 20.6161H6.88787C3.96796 20.6161 2 18.2407 2 15.322V8.79412C2 5.87545 3.96796 3.5 6.88787 3.5Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
export const Users = ({color = '#999', onClick, size = '20', className = ''}: any) => {
  return (
    <svg
      onClick={onClick}
      width={size}
      height={size}
      className={className}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M17.5948 10.9319C19.1972 10.9319 20.497 9.63295 20.497 8.03061C20.497 6.42828 19.1972 5.12936 17.5948 5.12936'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M18.9291 14.0847C19.4076 14.1177 19.8833 14.1856 20.3517 14.291C21.0026 14.4184 21.7854 14.6852 22.0641 15.2691C22.2419 15.6431 22.2419 16.0785 22.0641 16.4534C21.7863 17.0373 21.0026 17.3032 20.3517 17.437'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.28998 10.9319C4.68765 10.9319 3.38782 9.63295 3.38782 8.03061C3.38782 6.42828 4.68765 5.12936 6.28998 5.12936'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.95577 14.0847C4.47727 14.1177 4.00152 14.1856 3.5331 14.291C2.88227 14.4184 2.09943 14.6852 1.82168 15.2691C1.64293 15.6431 1.64293 16.0785 1.82168 16.4534C2.09852 17.0373 2.88227 17.3032 3.5331 17.437'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.9377 14.7096C15.1846 14.7096 17.9584 15.2009 17.9584 17.1671C17.9584 19.1325 15.2029 19.6421 11.9377 19.6421C8.68997 19.6421 5.91705 19.1508 5.91705 17.1846C5.91705 15.2183 8.67255 14.7096 11.9377 14.7096Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.9377 11.9049C9.79638 11.9049 8.07947 10.188 8.07947 8.04575C8.07947 5.90442 9.79638 4.1875 11.9377 4.1875C14.0791 4.1875 15.796 5.90442 15.796 8.04575C15.796 10.188 14.0791 11.9049 11.9377 11.9049Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
export const ArrowLeft = ({color = '#999', onClick, size = '20', className = ''}: any) => {
  return (
    <svg
      onClick={onClick}
      width={size}
      height={size}
      className={className}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M13.0167 16.0896C13.1467 16.1786 13.2937 16.2206 13.4397 16.2206C13.6787 16.2206 13.9147 16.1066 14.0597 15.8946C14.2937 15.5526 14.2067 15.0856 13.8647 14.8516C12.2757 13.7646 10.7957 12.4176 10.6987 12.0316C10.7957 11.5846 12.2757 10.2376 13.8647 9.14764C14.2067 8.91364 14.2937 8.44764 14.0587 8.10564C13.8277 7.76464 13.3607 7.67764 13.0167 7.90964C11.5907 8.88764 9.20068 10.7176 9.20068 12.0006C9.20068 13.2846 11.5917 15.1136 13.0167 16.0896Z'
        fill={color}
      ></path>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2 12C2 19.383 4.617 22 12 22C19.383 22 22 19.383 22 12C22 4.617 19.383 2 12 2C4.617 2 2 4.617 2 12ZM3.5 12C3.5 5.486 5.486 3.5 12 3.5C18.514 3.5 20.5 5.486 20.5 12C20.5 18.514 18.514 20.5 12 20.5C5.486 20.5 3.5 18.514 3.5 12Z'
        fill={color}
      ></path>
    </svg>
  )
}
export const Activity = ({color = '#999', onClick, size = '20', className = ''}: any) => {
  return (
    <svg
      onClick={onClick}
      width={size}
      height={size}
      className={className}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M7.24485 14.7815L10.238 10.8913L13.6522 13.5732L16.5812 9.79291'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <circle
        cx='19.9954'
        cy='4.20024'
        r='1.9222'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.9245 3.12015H7.65675C4.64531 3.12015 2.77803 5.25287 2.77803 8.26431V16.3467C2.77803 19.3581 4.60869 21.4817 7.65675 21.4817H16.2609C19.2723 21.4817 21.1396 19.3581 21.1396 16.3467V9.30779'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
export const Reports = ({color = '#999', onClick, size = '20', className = ''}: any) => {
  return (
    <svg
      onClick={onClick}
      width={size}
      height={size}
      className={className}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.29332 22L14.0696 19.7519V13.8603L21.5593 6.26456C21.8416 5.97995 22 5.58933 22 5.18027V3.51754C22 2.67869 21.3417 2 20.5295 2H3.47049C2.65826 2 2 2.67869 2 3.51754V5.2183C2 5.60431 2.14169 5.97534 2.39719 6.2565L9.29332 13.8603V22Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
export const KeySquare = ({color = '#999', onClick, size = '20', className = ''}: any) => {
  return (
    <svg
      onClick={onClick}
      width={size}
      height={size}
      className={className}
      viewBox='0 0 24 24'
      fill='none'
    >
      <path
        d='M17.2606 11.4402C19.8781 11.4402 22 9.3269 22 6.72008C22 4.11325 19.8781 2 17.2606 2C14.643 2 12.5211 4.11325 12.5211 6.72008C12.5211 7.92754 13.0722 8.80569 13.0722 8.80569L7.3408 14.5137C7.08363 14.7698 6.72357 15.4358 7.3408 16.0505L8.00212 16.7091C8.25929 16.9286 8.90589 17.236 9.43495 16.7091L10.2065 15.9407C10.978 16.7091 11.8598 16.27 12.1904 15.8309C12.7415 15.0625 12.0802 14.2942 12.0802 14.2942L12.3007 14.0746C13.3588 15.1284 14.2846 14.5137 14.6153 14.0746C15.1664 13.3062 14.6153 12.5378 14.6153 12.5378C14.3948 12.0988 13.954 12.0988 14.505 11.5499L15.1664 10.8913C15.6954 11.3304 16.7829 11.4402 17.2606 11.4402Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
      <path
        d='M2 11.9899C2 16.7087 2 19.0681 3.46594 20.5341C4.93188 22 7.29127 22 12.0101 22C16.7288 22 19.0882 22 20.5542 20.5341C21.6692 19.419 21.9361 17.787 22 14.993M9.00704 2C6.21298 2.06388 4.58099 2.33078 3.46594 3.44584C2.48914 4.42263 2.16321 5.79612 2.05446 8'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
export const Key = ({color = '#999', onClick, size = '20', className = ''}: any) => {
  return (
    <svg
      onClick={onClick}
      width={size}
      height={size}
      className={className}
      viewBox='0 0 24 24'
      fill='none'
    >
      <path
        d='M18.9771 5.02291L19.5074 4.49258V4.49258L18.9771 5.02291ZM18.9771 14.7904L19.5074 15.3207L18.9771 14.7904ZM7.14558 12.6684L6.61525 12.138L6.61525 12.138L7.14558 12.6684ZM3.43349 16.3804L3.96382 16.9108L3.96382 16.9108L3.43349 16.3804ZM7.61956 20.5665L7.08923 20.0362L7.08923 20.0362L7.61956 20.5665ZM11.3319 16.8541L10.8016 16.3238L11.3319 16.8541ZM3.00906 17.5904L2.26365 17.6732L3.00906 17.5904ZM3.24113 19.679L2.49572 19.7618L2.49572 19.7618L3.24113 19.679ZM4.32101 20.7589L4.23819 21.5043H4.23819L4.32101 20.7589ZM6.4096 20.9909L6.49242 20.2455H6.49242L6.4096 20.9909ZM3.52408 20.2677L4.05441 19.7374L4.05441 19.7374L3.52408 20.2677ZM3.73229 20.4759L3.20196 21.0062L3.20196 21.0063L3.73229 20.4759ZM7.40432 11.6311L6.67789 11.8177H6.67789L7.40432 11.6311ZM12.3689 16.5957L12.1823 17.3221L12.3689 16.5957ZM7.63832 17.063C7.34382 16.7717 6.86895 16.7743 6.57767 17.0688C6.2864 17.3633 6.28901 17.8382 6.58351 18.1294L7.63832 17.063ZM13.1161 10.8839C12.628 10.3957 12.628 9.60427 13.1161 9.11612L12.0555 8.05546C10.9815 9.1294 10.9815 10.8706 12.0555 11.9445L13.1161 10.8839ZM14.8839 10.8839C14.3957 11.372 13.6043 11.372 13.1161 10.8839L12.0555 11.9445C13.1294 13.0185 14.8706 13.0185 15.9445 11.9445L14.8839 10.8839ZM14.8839 9.11612C15.372 9.60427 15.372 10.3957 14.8839 10.8839L15.9445 11.9445C17.0185 10.8706 17.0185 9.1294 15.9445 8.05546L14.8839 9.11612ZM15.9445 8.05546C14.8706 6.98151 13.1294 6.98151 12.0555 8.05546L13.1161 9.11612C13.6043 8.62796 14.3957 8.62796 14.8839 9.11612L15.9445 8.05546ZM18.4468 5.55324C20.8511 7.95756 20.8511 11.8557 18.4468 14.2601L19.5074 15.3207C22.4975 12.3306 22.4975 7.48269 19.5074 4.49258L18.4468 5.55324ZM19.5074 4.49258C16.5173 1.50247 11.6694 1.50247 8.67928 4.49258L9.73994 5.55324C12.1443 3.14892 16.0424 3.14892 18.4468 5.55324L19.5074 4.49258ZM6.61525 12.138L2.90316 15.8501L3.96382 16.9108L7.67591 13.1987L6.61525 12.138ZM8.14989 21.0968L9.39029 19.8564L8.32963 18.7958L7.08923 20.0362L8.14989 21.0968ZM9.39029 19.8564L11.8623 17.3845L10.8016 16.3238L8.32963 18.7958L9.39029 19.8564ZM2.26365 17.6732L2.49572 19.7618L3.98654 19.5962L3.75447 17.5076L2.26365 17.6732ZM4.23819 21.5043L6.32678 21.7364L6.49242 20.2455L4.40384 20.0135L4.23819 21.5043ZM2.99375 20.798L3.20196 21.0062L4.26263 19.9456L4.05441 19.7374L2.99375 20.798ZM4.40384 20.0135C4.35042 20.0075 4.30062 19.9836 4.26262 19.9456L3.20196 21.0063C3.48081 21.2851 3.84626 21.4607 4.23819 21.5043L4.40384 20.0135ZM2.49572 19.7618C2.53926 20.1537 2.7149 20.5192 2.99375 20.798L4.05441 19.7374C4.01641 19.6994 3.99248 19.6496 3.98654 19.5962L2.49572 19.7618ZM7.08923 20.0362C6.93242 20.193 6.71283 20.27 6.49242 20.2455L6.32678 21.7364C7.00007 21.8112 7.67087 21.5759 8.14989 21.0968L7.08923 20.0362ZM2.90316 15.8501C2.42414 16.3291 2.18884 16.9999 2.26365 17.6732L3.75447 17.5076C3.72999 17.2872 3.80701 17.0676 3.96382 16.9108L2.90316 15.8501ZM8.13075 11.4446C7.60655 9.4033 8.14412 7.14906 9.73994 5.55324L8.67928 4.49258C6.69321 6.47865 6.02725 9.28401 6.67789 11.8177L8.13075 11.4446ZM18.4468 14.2601C16.8509 15.8559 14.5967 16.3934 12.5554 15.8693L12.1823 17.3221C14.716 17.9728 17.5214 17.3068 19.5074 15.3207L18.4468 14.2601ZM11.8623 17.3845C11.9181 17.3287 12.0324 17.2836 12.1823 17.3221L12.5554 15.8693C11.9675 15.7183 11.2845 15.8409 10.8016 16.3238L11.8623 17.3845ZM7.67591 13.1987C8.15857 12.716 8.28182 12.0329 8.13075 11.4446L6.67789 11.8177C6.7163 11.9672 6.67127 12.082 6.61525 12.138L7.67591 13.1987ZM9.38736 18.7929L7.63832 17.063L6.58351 18.1294L8.33255 19.8593L9.38736 18.7929Z'
        fill={color}
      />
    </svg>
  )
}
export const Truck = ({color = '#999', onClick, size = '20', className = ''}: any) => {
  return (
    <svg
      onClick={onClick}
      width={size}
      height={size}
      className={className}
      viewBox='0 0 24 24'
      fill='none'
    >
      <path
        opacity='0.9'
        d='M11.9998 14H12.9998C14.0998 14 14.9998 13.1 14.9998 12V2H5.99976C4.49976 2 3.18977 2.82999 2.50977 4.04999'
        stroke={color}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2 17C2 18.66 3.34 20 5 20H6C6 18.9 6.9 18 8 18C9.1 18 10 18.9 10 20H14C14 18.9 14.9 18 16 18C17.1 18 18 18.9 18 20H19C20.66 20 22 18.66 22 17V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L18.58 6.01001C18.22 5.39001 17.56 5 16.84 5H15V12C15 13.1 14.1 14 13 14H12'
        stroke={color}
        strokeWidth='1.4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z'
        stroke={color}
        strokeWidth='1.4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z'
        stroke={color}
        strokeWidth='1.4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M22 12V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L22 12Z'
        stroke={color}
        strokeWidth='1.4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2 8H8'
        stroke={color}
        strokeWidth='1.4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2 11H6'
        stroke={color}
        strokeWidth='1.4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2 14H4'
        stroke={color}
        strokeWidth='1.4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
export const UserProfile = ({color = '#999', onClick, size = '20', className = ''}: any) => {
  return (
    <svg
      onClick={onClick}
      width={size}
      height={size}
      className={className}
      viewBox='0 0 24 24'
      fill='none'
    >
      <circle cx='9' cy='9' r='2' stroke={color} strokeWidth='1.5' />
      <path
        d='M13 15C13 16.1046 13 17 9 17C5 17 5 16.1046 5 15C5 13.8954 6.79086 13 9 13C11.2091 13 13 13.8954 13 15Z'
        stroke={color}
        strokeWidth='1.5'
      />
      <path
        d='M22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C21.298 5.64118 21.5794 6.2255 21.748 7'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path d='M19 12H15' stroke={color} strokeWidth='1.5' strokeLinecap='round' />
      <path d='M19 9H14' stroke={color} strokeWidth='1.5' strokeLinecap='round' />
      <path d='M19 15H16' stroke={color} strokeWidth='1.5' strokeLinecap='round' />
    </svg>
  )
}
export const EyeOpen = ({color = '#999', onClick, size = '18', className = ''}: any) => {
  return (
    <svg
      onClick={onClick}
      width={size}
      height={size}
      className={className}
      viewBox='0 0 24 24'
      fill='none'
    >
      <path
        d='M12 5C8.24261 5 5.43602 7.4404 3.76737 9.43934C2.51521 10.9394 2.51521 13.0606 3.76737 14.5607C5.43602 16.5596 8.24261 19 12 19C15.7574 19 18.564 16.5596 20.2326 14.5607C21.4848 13.0606 21.4848 10.9394 20.2326 9.43934C18.564 7.4404 15.7574 5 12 5Z'
        stroke={color}
        strokeWidth='1.6'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z'
        stroke={color}
        strokeWidth='1.6'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
export const EyeClose = ({color = '#999', onClick, size = '18', className = ''}: any) => {
  return (
    <svg
      onClick={onClick}
      width={size}
      height={size}
      className={className}
      viewBox='0 0 24 24'
      fill='none'
    >
      <path
        d='M9.76404 5.29519C10.4664 5.10724 11.2123 5 12 5C15.7574 5 18.564 7.4404 20.2326 9.43934C21.4848 10.9394 21.4846 13.0609 20.2324 14.5609C20.0406 14.7907 19.8337 15.0264 19.612 15.2635M12.5 9.04148C13.7563 9.25224 14.7478 10.2437 14.9585 11.5M3 3L21 21M11.5 14.9585C10.4158 14.7766 9.52884 14.0132 9.17072 13M4.34914 8.77822C4.14213 9.00124 3.94821 9.22274 3.76762 9.43907C2.51542 10.9391 2.51523 13.0606 3.76739 14.5607C5.43604 16.5596 8.24263 19 12 19C12.8021 19 13.5608 18.8888 14.2744 18.6944'
        stroke={color}
        strokeWidth='1.6'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
export const Search = ({color = '#999', onClick, size = '20', className = ''}: any) => {
  return (
    <svg
      onClick={onClick}
      width={size}
      height={size}
      className={className}
      viewBox='0 0 24 24'
      fill='none'
    >
      <path
        d='M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M22 22L20 20'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
export const Times = ({color = '#999', onClick, size = '20', className = ''}: any) => {
  return (
    <svg
      onClick={onClick}
      width={size}
      height={size}
      className={className}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M13.06 12L17.48 7.57996C17.5537 7.5113 17.6128 7.4285 17.6538 7.3365C17.6948 7.2445 17.7168 7.14518 17.7186 7.04448C17.7204 6.94378 17.7018 6.84375 17.6641 6.75036C17.6264 6.65697 17.5703 6.57214 17.499 6.50092C17.4278 6.4297 17.343 6.37356 17.2496 6.33584C17.1562 6.29811 17.0562 6.27959 16.9555 6.28137C16.8548 6.28314 16.7555 6.30519 16.6635 6.34618C16.5715 6.38717 16.4887 6.44627 16.42 6.51996L12 10.94L7.58 6.51996C7.43782 6.38748 7.24978 6.31535 7.05548 6.31878C6.86118 6.32221 6.67579 6.40092 6.53838 6.53834C6.40096 6.67575 6.32225 6.86113 6.31882 7.05544C6.3154 7.24974 6.38752 7.43778 6.52 7.57996L10.94 12L6.52 16.42C6.37955 16.5606 6.30066 16.7512 6.30066 16.95C6.30066 17.1487 6.37955 17.3393 6.52 17.48C6.66062 17.6204 6.85125 17.6993 7.05 17.6993C7.24875 17.6993 7.43937 17.6204 7.58 17.48L12 13.06L16.42 17.48C16.5606 17.6204 16.7512 17.6993 16.95 17.6993C17.1488 17.6993 17.3394 17.6204 17.48 17.48C17.6204 17.3393 17.6993 17.1487 17.6993 16.95C17.6993 16.7512 17.6204 16.5606 17.48 16.42L13.06 12Z'
        fill={color}
      />
    </svg>
  )
}
export const AddUser = ({color = '#999', onClick, size = '20', className = ''}: any) => {
  return (
    <svg
      onClick={onClick}
      width={size}
      height={size}
      className={className}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.87743 15.2062C6.03343 15.2062 2.75043 15.7872 2.75043 18.1152C2.75043 20.4422 6.01243 21.0452 9.87743 21.0452C13.7214 21.0452 17.0044 20.4632 17.0044 18.1362C17.0044 15.8092 13.7424 15.2062 9.87743 15.2062Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.87745 11.8859C12.4134 11.8859 14.4454 9.85291 14.4454 7.31791C14.4454 4.78191 12.4134 2.74991 9.87745 2.74991C7.34245 2.74991 5.30945 4.78191 5.30945 7.31791C5.30945 9.85291 7.34245 11.8859 9.87745 11.8859Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M19.2041 8.6691V12.6791'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M21.25 10.674H17.16'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
export const PlusIcon = ({color = '#999', onClick, size = '20', className = ''}: any) => {
  return (
    <svg
      onClick={onClick}
      width={size}
      height={size}
      className={className}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill={color}
        fillRule='evenodd'
        strokeWidth='2'
        d='M9 17a1 1 0 102 0v-6h6a1 1 0 100-2h-6V3a1 1 0 10-2 0v6H3a1 1 0 000 2h6v6z'
      />
    </svg>
  )
}
export const Bars = ({color = '#999', onClick, size = '20', className = ''}: any) => {
  return (
    <svg
      onClick={onClick}
      width={size}
      height={size}
      className={className}
      viewBox='0 0 24 24'
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1673.9,1363.2L1673.9,1363.2c0,52.3-42.4,94.3-94.3,94.3H212.7c-52.3,0-94.3-42.4-94.3-94.3l0,0
	c0-52.3,42.4-94.3,94.3-94.3h1366.8C1631.5,1268.5,1673.9,1310.9,1673.9,1363.2z'
      />
      <path
        d='M1673.9,895.6L1673.9,895.6c0,52.3-42.4,94.3-94.3,94.3H213c-52.3,0-94.3-42.4-94.3-94.3l0,0c0-52.3,42.4-94.3,94.3-94.3
	h1366.6C1631.5,800.8,1673.9,843.2,1673.9,895.6z'
      />
      <path
        d='M1673.9,427.9L1673.9,427.9c0,52.3-42.4,94.3-94.3,94.3H212.7c-52.3,0-94.3-42.4-94.3-94.3l0,0c0-52.3,42.4-94.3,94.3-94.3
	h1366.8C1631.5,333.2,1673.9,375.6,1673.9,427.9z'
      />
    </svg>
  )
}
export const Logout = ({color = '#999', onClick, size = '20', className = ''}: any) => {
  return (
    <svg
      onClick={onClick}
      width={size}
      height={size}
      className={className}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M15 12L2 12M2 12L5.5 9M2 12L5.5 15'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.3531 21.8897 19.1752 21.9862 17 21.9983M9.00195 17C9.01406 19.175 9.11051 20.3529 9.87889 21.1213C10.5202 21.7626 11.4467 21.9359 13 21.9827'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
export const Reload = ({color = '#999', onClick, size = '20', className = ''}: any) => {
  return (
    <svg
      onClick={onClick}
      width={size}
      height={size}
      className={className}
      viewBox='0 0 24 24'
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M1,12A11,11,0,0,1,17.882,2.7l1.411-1.41A1,1,0,0,1,21,2V6a1,1,0,0,1-1,1H16a1,1,0,0,1-.707-1.707l1.128-1.128A8.994,8.994,0,0,0,3,12a1,1,0,0,1-2,0Zm21-1a1,1,0,0,0-1,1,9.01,9.01,0,0,1-9,9,8.9,8.9,0,0,1-4.42-1.166l1.127-1.127A1,1,0,0,0,8,17H4a1,1,0,0,0-1,1v4a1,1,0,0,0,.617.924A.987.987,0,0,0,4,23a1,1,0,0,0,.707-.293L6.118,21.3A10.891,10.891,0,0,0,12,23,11.013,11.013,0,0,0,23,12,1,1,0,0,0,22,11Z' />
    </svg>
  )
}
export const User = ({color = '#999', onClick, size = '20', className = ''}: any) => {
  return (
    <svg
      onClick={onClick}
      width={size}
      height={size}
      className={className}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='12' cy='6' r='4' stroke={color} strokeWidth='1.5' />
      <path
        d='M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
