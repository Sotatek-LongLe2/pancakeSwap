import { Svg, SvgProps } from '@pancakeswap/uikit'

const PoolAllocationChart: React.FC<SvgProps> = (props) => {
  return (
    // <Svg viewBox="0 0 103 105" {...props}>
    //   <svg width="103" height="105" viewBox="0 0 403 405" fill="none" xmlns="http://www.w3.org/2000/svg">
    //     <ellipse
    //       cx="201.5"
    //       cy="202.5"
    //       rx="200.5"
    //       ry="199.5"
    //       transform="rotate(-90 201.5 202.5)"
    //       fill="#BDC2C4"
    //       stroke="#0E0E0E"
    //       strokeOpacity="0.05"
    //       strokeWidth="2"
    //     />
    //     <path
    //       d="M201.5 2.00002C243.63 2.00002 284.679 15.4044 318.763 40.2921C352.847 65.1798 378.217 100.273 391.236 140.542C404.255 180.811 404.255 224.189 391.236 264.458C378.217 304.727 352.847 339.82 318.763 364.708C284.679 389.596 243.63 403 201.5 403C159.37 403 118.321 389.596 84.2368 364.708C50.1527 339.82 24.7832 304.727 11.7642 264.458C-1.25475 224.189 -1.25475 180.811 11.7642 140.542L201.5 202.5L201.5 2.00002Z"
    //       fill="#D750B2"
    //       stroke="#0E0E0E"
    //       strokeOpacity="0.05"
    //       strokeWidth="2"
    //     />
    //     <path
    //       d="M201.5 2.00002C243.63 2.00002 284.679 15.4044 318.763 40.2921C352.847 65.1798 378.217 100.273 391.236 140.542C404.255 180.811 404.255 224.189 391.236 264.458C378.217 304.727 352.847 339.82 318.763 364.708L201.5 202.5L201.5 2.00002Z"
    //       fill="#A881FC"
    //       stroke="#0E0E0E"
    //       strokeOpacity="0.05"
    //       strokeWidth="2"
    //       strokeLinejoin="round"
    //     />
    //     <path
    //       d="M201.5 2.00002C243.63 2.00002 284.679 15.4044 318.763 40.2921C352.847 65.1798 378.217 100.273 391.236 140.542L201.5 202.5L201.5 2.00002Z"
    //       fill="#3AF3F8"
    //       stroke="#0E0E0E"
    //       strokeOpacity="0.05"
    //       strokeWidth="2"
    //       strokeLinejoin="round"
    //     />
    //     <path
    //       d="M201.5 2.00002C243.63 2.00002 284.679 15.4044 318.763 40.2921L201.5 202.5L201.5 2.00002Z"
    //       fill="#10AC87"
    //       stroke="#0E0E0E"
    //       strokeOpacity="0.05"
    //       strokeWidth="2"
    //       strokeLinejoin="round"
    //     />
    //     <path
    //       d="M201.5 2.00002C218.235 2.00002 234.904 4.11632 251.114 8.29909L201.5 202.5L201.5 2.00002Z"
    //       fill="#93D45A"
    //       stroke="#0E0E0E"
    //       strokeOpacity="0.05"
    //       strokeWidth="2"
    //       strokeLinejoin="round"
    //     />
    //     <path
    //       d="M201.5 2.00002C222.435 2.00002 243.239 5.3116 263.149 11.8132L201.5 202.5L201.5 2.00002Z"
    //       fill="#8FD74F"
    //       stroke="#0E0E0E"
    //       strokeOpacity="0.05"
    //       strokeWidth="2"
    //       strokeLinejoin="round"
    //     />
    //     <path
    //       d="M201.5 2.00002C205.679 2.00002 209.856 2.13198 214.027 2.39565L201.5 202.5L201.5 2.00002Z"
    //       fill="#C4C4C4"
    //       stroke="#0E0E0E"
    //       strokeOpacity="0.05"
    //       strokeWidth="2"
    //       strokeLinejoin="round"
    //     />
    //     <path
    //       d="M201.5 2.00002C209.859 2.00002 218.211 2.52807 226.504 3.58101L201.5 202.5L201.5 2.00002Z"
    //       fill="#FFD307"
    //       stroke="#0E0E0E"
    //       strokeOpacity="0.05"
    //       strokeWidth="2"
    //       strokeLinejoin="round"
    //     />
    //     <ellipse
    //       opacity="0.2"
    //       cx="201.5"
    //       cy="202.5"
    //       rx="200.5"
    //       ry="199.5"
    //       transform="rotate(-90 201.5 202.5)"
    //       stroke="#280D5F"
    //       strokeWidth="3"
    //     />
    //   </svg>
    // </Svg>
    <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M160 80C160 92.702 156.975 105.221 151.177 116.523C145.378 127.824 136.971 137.581 126.653 144.989C116.334 152.396 104.4 157.24 91.8376 159.119C79.2754 160.999 66.4462 159.86 54.4115 155.797L80 80H160Z" fill="#2A88DF" />
      <path opacity="0.8" d="M55.0382 156.006C46.5177 153.208 38.5285 148.997 31.4045 143.549L80 80L55.0382 156.006Z" fill="#2A88DF" />
      <path opacity="0.6" d="M31.6343 143.724C27.8293 140.836 24.2906 137.613 21.0606 134.094L80 80L31.6343 143.724Z" fill="#2A88DF" />
      <path opacity="0.9" d="M21.1589 134.201C14.6416 127.126 9.45379 118.933 5.84455 110.016L80 80L21.1589 134.201Z" fill="#FF511A" />
      <path opacity="0.8" d="M5.92321 110.21C4.80693 107.473 3.84322 104.676 3.03651 101.832L80 80L5.92321 110.21Z" fill="#FF511A" />
      <path opacity="0.6" d="M3.0279 101.801C-1.14959 87.0521 -1.00159 71.4133 3.45428 56.7459C7.91015 42.0785 16.4863 29.0001 28.162 19.0671L80 80L3.0279 101.801Z" fill="#FF511A" />
      <path opacity="0.7" d="M28.252 18.9906C41.0575 8.12907 56.9559 1.57219 73.6951 0.248836L80 80L28.252 18.9906Z" fill="#F0B90A" />
      <path opacity="0.9" d="M73.3637 0.275729C84.4473 -0.646877 95.6015 0.751711 106.114 4.3822C116.627 8.01269 126.267 13.7953 134.419 21.3609C142.572 28.9265 149.057 38.1088 153.461 48.3216C157.865 58.5344 160.091 69.5533 159.997 80.6748L80 80L73.3637 0.275729Z" fill="#F0B90A" />
    </svg>

  )
}

export default PoolAllocationChart
