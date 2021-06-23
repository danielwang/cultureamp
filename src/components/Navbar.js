import { Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Menu = () => {
  return (

    <nav className='navbar navbar-dark' role="navigation" aria-label="CultureAmp global topbar">
      <Container>
      <LinkContainer to='/'>
        <Nav.Link className='ms-n3'>
        <svg width="186" height="27" viewBox="0 0 186 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.3258 15.1769C19.3981 15.2972 19.423 15.4401 19.3957 15.5777C19.1407 16.7363 18.5202 17.7824 17.6258 18.5619C17.5768 18.599 17.5355 18.6454 17.5044 18.6985C17.4932 18.7228 17.4874 18.7492 17.4874 18.7759C17.4874 18.8027 17.4932 18.8291 17.5044 18.8533C17.5222 18.8741 17.5448 18.8904 17.57 18.9009C17.5954 18.9115 17.6228 18.916 17.6501 18.914C17.7796 18.8795 17.9048 18.8306 18.0235 18.7683C18.5481 18.4703 19.0116 18.0758 19.3896 17.6056C19.6173 17.3293 19.8419 17.053 20.0575 16.7677C20.4634 16.2041 20.7638 15.5715 20.944 14.9007C21.1079 14.3573 21.2475 13.8078 21.4175 13.2644C21.487 13.0652 21.5712 12.8714 21.6695 12.6846C21.709 12.6271 21.7549 12.5741 21.8061 12.5267H21.8486C21.8911 12.6694 21.9427 12.806 21.973 12.9517C22.0525 13.41 22.0637 13.8775 22.0065 14.3391C21.9435 14.9398 21.8204 15.5327 21.6391 16.1089C21.5122 16.4631 21.3408 16.7997 21.1292 17.1107C20.5972 17.9876 19.9689 18.8021 19.256 19.5394C18.7309 20.0465 18.1631 20.5076 17.559 20.9177C17.515 20.9402 17.4749 20.97 17.4407 21.0057C17.4053 21.0482 17.3869 21.1022 17.389 21.1575C17.4017 21.1822 17.4202 21.2033 17.443 21.2192C17.4657 21.2351 17.492 21.2452 17.5196 21.2486C17.6465 21.2477 17.773 21.2314 17.896 21.1999C18.4569 21.0383 18.9815 20.7703 19.4412 20.4106C20.727 19.4627 21.7712 18.2251 22.4891 16.798C22.9466 15.867 23.2432 14.8652 23.3665 13.8351C23.4403 13.1848 23.4475 12.5287 23.3878 11.8771C23.3356 11.5431 23.3459 11.2024 23.4181 10.8722C23.4372 10.7965 23.4647 10.7232 23.5 10.6536C23.582 10.4957 23.7004 10.4866 23.7794 10.6536C23.8624 10.8116 23.9237 10.9802 23.9615 11.1545C24.1282 11.9896 24.1803 12.8434 24.1163 13.6924C23.9985 15.0719 23.6517 16.4221 23.0903 17.6875C22.5216 18.9905 21.6678 20.1493 20.5918 21.0785C20.2426 21.3821 19.9087 21.6857 19.5475 21.9711C19.1136 22.2866 18.6487 22.5571 18.1601 22.7786C17.082 23.3142 15.9346 23.6974 14.7509 23.917C14.0254 24.0429 13.2887 24.0918 12.553 24.0627C12.1918 24.0627 11.8274 24.0385 11.4662 24.0203C10.6495 23.975 9.84368 23.8114 9.07395 23.5345C7.95938 23.1467 6.88807 22.644 5.8773 22.0349C4.69853 21.3121 3.6932 20.3389 2.93257 19.1842C2.55708 18.6412 2.22998 18.0662 1.95505 17.4659C1.94104 17.4303 1.91849 17.3987 1.88937 17.3738C1.86026 17.3489 1.82547 17.3315 1.78808 17.3233C1.58845 17.2736 1.40272 17.1792 1.24494 17.0472C1.08716 16.9152 0.961462 16.749 0.877343 16.5613C0.652235 16.0115 0.477469 15.4426 0.35519 14.8612C0.132707 13.9228 0.0136002 12.9629 0 11.9985C0.00911797 11.3879 0.0649381 10.779 0.16697 10.177C0.282203 9.35903 0.485779 8.55593 0.774128 7.78177C1.02915 7.10427 1.38757 6.47037 1.83665 5.90261C2.09773 5.57474 2.31328 5.20741 2.56828 4.87347C4.18671 2.73446 6.50383 1.23054 9.11648 0.623358C9.6204 0.501926 10.1244 0.374422 10.6344 0.280312C11.0897 0.19531 11.5451 0.140666 12.0126 0.0981645C12.553 0.0495921 13.0933 0.00709109 13.6368 0.00101951C15.8168 -0.0293365 17.9524 0.618871 19.7479 1.85589C19.9525 1.97964 20.1368 2.13427 20.2943 2.3143C20.4106 2.45597 20.488 2.62545 20.519 2.8061C20.531 2.8486 20.5553 2.88661 20.5888 2.91539C21.0168 3.32825 21.4722 3.71986 21.8668 4.16309C22.494 4.84828 22.9479 5.6738 23.1905 6.57048C23.3016 6.93264 23.3403 7.31315 23.3044 7.69028C23.2684 8.06738 23.1585 8.43375 22.981 8.7684C22.684 9.26828 22.2665 9.6858 21.7666 9.98273C21.2105 10.3611 20.5434 10.5418 19.8723 10.4957C19.2449 10.4671 18.6494 10.2114 18.1966 9.77625C17.7208 9.28185 17.2138 8.81843 16.6786 8.3889C16.3265 8.12175 15.9622 7.86982 15.5949 7.62997C15.1508 7.36313 14.6589 7.18574 14.1468 7.10782C13.5643 7.00127 12.971 6.96559 12.3799 7.00156C11.0878 7.02619 9.83752 7.46457 8.81287 8.25233C8.04502 8.83245 7.41303 9.57323 6.96108 10.4229C6.70513 10.9384 6.5437 11.4958 6.48446 12.0683C6.43503 12.4215 6.40665 12.7773 6.39946 13.1339C6.42809 14.1503 6.69314 15.146 7.17358 16.0421C7.52857 16.7373 8.001 17.3658 8.57002 17.9001C9.0993 18.3757 9.68565 18.7836 10.3156 19.1143C11.0326 19.5031 11.8245 19.7339 12.638 19.7914C13.7063 19.9029 14.7854 19.741 15.774 19.3208C16.2478 19.0981 16.684 18.8032 17.0672 18.4465C17.729 17.8773 18.2842 17.1947 18.7066 16.4307C18.8645 16.1545 18.9737 15.8509 19.1073 15.5595C19.1467 15.4714 19.1923 15.3834 19.2378 15.2984C19.2656 15.2572 19.2983 15.2195 19.335 15.1861" fill="white"/>
          <path d="M178.313 10.5504C180.499 10.5504 181.956 12.1776 181.956 14.582C181.956 16.9863 180.499 18.5892 178.313 18.5892C176.128 18.5892 174.646 16.9863 174.646 14.5577C174.646 12.129 176.103 10.5504 178.313 10.5504ZM114.319 10.3076C116.019 10.3076 117.136 11.2547 117.403 12.7604H111.259C111.526 11.2426 112.643 10.3076 114.319 10.3076ZM59.2374 16.2334C59.2374 17.7149 58.3631 18.5892 56.8087 18.5892C55.2544 18.5892 54.3315 17.7149 54.3315 16.2334V7.92751C54.3315 7.84696 54.2996 7.76978 54.2426 7.71278C54.1857 7.65586 54.1085 7.62391 54.0279 7.62391H50.8707C50.7902 7.62391 50.713 7.65586 50.6561 7.71278C50.5992 7.76978 50.5671 7.84696 50.5671 7.92751V16.3791C50.5671 20.0707 52.7287 21.9164 55.4487 21.9164C57.3916 21.9164 58.7031 20.7264 59.2617 18.9292V21.2364C59.266 21.3155 59.2994 21.3902 59.3554 21.4462C59.4114 21.5022 59.4862 21.5356 59.5653 21.54H62.7468C62.8272 21.54 62.9045 21.508 62.9614 21.4511C63.0183 21.3941 63.0504 21.3169 63.0504 21.2364V7.92751C63.0504 7.84696 63.0183 7.76978 62.9614 7.71278C62.9045 7.65586 62.8272 7.62391 62.7468 7.62391H59.5531C59.4726 7.62391 59.3954 7.65586 59.3385 7.71278C59.2815 7.76978 59.2495 7.84696 59.2495 7.92751L59.2374 16.2334ZM91.9267 16.2334C91.9267 17.7149 91.0522 18.5892 89.4982 18.5892C87.9435 18.5892 87.021 17.7149 87.021 16.2334V7.92751C87.021 7.84696 86.9887 7.76978 86.9317 7.71278C86.8755 7.65586 86.7982 7.62391 86.7172 7.62391H83.5605C83.4795 7.62391 83.4022 7.65586 83.3452 7.71278C83.2882 7.76978 83.2567 7.84696 83.2567 7.92751V16.3791C83.2567 20.0707 85.4182 21.9164 88.1385 21.9164C90.081 21.9164 91.3927 20.7264 91.9507 18.9292V21.2364C91.9552 21.3155 91.989 21.3902 92.0452 21.4462C92.1007 21.5022 92.1757 21.5356 92.2545 21.54H95.436C95.517 21.54 95.5942 21.508 95.6512 21.4511C95.7075 21.3941 95.7397 21.3169 95.7397 21.2364V7.92751C95.7397 7.84696 95.7075 7.76978 95.6512 7.71278C95.5942 7.65586 95.517 7.62391 95.436 7.62391H92.2425C92.1622 7.62391 92.085 7.65586 92.028 7.71278C91.971 7.76978 91.9387 7.84696 91.9387 7.92751L91.9267 16.2334ZM98.8485 21.2364C98.8485 21.3169 98.8807 21.3941 98.937 21.4511C98.994 21.508 99.0712 21.54 99.1522 21.54H102.285C102.365 21.54 102.442 21.508 102.499 21.4511C102.556 21.3941 102.589 21.3169 102.589 21.2364V13.6105C102.589 11.6918 103.803 11.3276 105.503 11.3276H106.765C106.846 11.3276 106.924 11.2956 106.981 11.2387C107.038 11.1818 107.069 11.1045 107.069 11.024V7.92751C107.069 7.84696 107.038 7.76978 106.981 7.71278C106.924 7.65586 106.846 7.62391 106.765 7.62391H106.462C104.422 7.62391 103.159 8.57108 102.577 10.8783V7.93966C102.577 7.85911 102.544 7.78186 102.487 7.72493C102.43 7.66801 102.353 7.63606 102.273 7.63606H99.1402C99.0592 7.63606 98.982 7.66801 98.925 7.72493C98.868 7.78186 98.8365 7.85911 98.8365 7.93966L98.8485 21.2364ZM147.64 21.2364C147.64 21.3169 147.672 21.3941 147.729 21.4511C147.785 21.508 147.862 21.54 147.943 21.54H151.1C151.181 21.54 151.258 21.508 151.315 21.4511C151.372 21.3941 151.404 21.3169 151.404 21.2364V12.7604C151.404 11.4005 152.157 10.5504 153.589 10.5504C155.023 10.5504 155.824 11.4005 155.824 12.7604V21.2364C155.824 21.3169 155.856 21.3941 155.913 21.4511C155.97 21.508 156.047 21.54 156.127 21.54H159.309C159.39 21.54 159.467 21.508 159.524 21.4511C159.581 21.3941 159.613 21.3169 159.613 21.2364V12.7604C159.613 11.4005 160.39 10.5504 161.799 10.5504C163.207 10.5504 164.033 11.4005 164.033 12.7604V21.2364C164.037 21.3155 164.071 21.3902 164.127 21.4462C164.182 21.5022 164.257 21.5356 164.336 21.54H167.494C167.574 21.54 167.651 21.508 167.708 21.4511C167.765 21.3941 167.797 21.3169 167.797 21.2364V12.639C167.797 9.04463 165.672 7.22318 162.964 7.22318C160.681 7.22318 159.516 8.70466 158.908 10.5626C158.737 9.63578 158.251 8.79676 157.531 8.18806C156.812 7.57936 155.904 7.23839 154.962 7.22318C152.971 7.22318 152.072 8.43751 151.392 10.2347V7.92751C151.392 7.84696 151.36 7.76978 151.303 7.71278C151.246 7.65586 151.169 7.62391 151.088 7.62391H147.931C147.85 7.62391 147.773 7.65586 147.716 7.71278C147.659 7.76978 147.628 7.84696 147.628 7.92751L147.64 21.2364ZM185.988 14.582C185.988 10.5018 183.583 7.22318 179.722 7.22318C177.196 7.22318 175.253 8.55893 174.646 10.4533V7.92751C174.646 7.84696 174.614 7.76978 174.557 7.71278C174.5 7.65586 174.423 7.62391 174.343 7.62391H171.173C171.093 7.62391 171.016 7.65586 170.959 7.71278C170.902 7.76978 170.869 7.84696 170.869 7.92751V26.628C170.869 26.7085 170.902 26.7857 170.959 26.8427C171.016 26.8996 171.093 26.9315 171.173 26.9315H174.355C174.435 26.9315 174.512 26.8996 174.569 26.8427C174.626 26.7857 174.658 26.7085 174.658 26.628V18.7349C175.265 20.6293 177.208 21.9407 179.734 21.9407C183.595 21.9407 186 18.6863 186 14.582H185.988ZM133.384 13.7623L135.833 7.15032L138.289 13.7623H133.384ZM121.24 14.588C121.24 10.4351 118.763 7.05924 114.295 7.05924C110.093 7.05924 107.349 10.4351 107.349 14.588C107.349 18.8867 110.409 22.0925 115.072 22.0925C117.598 22.0925 119.759 20.9753 120.779 19.4939C120.805 19.4592 120.825 19.4195 120.835 19.3772C120.847 19.3348 120.849 19.2907 120.841 19.2475C120.835 19.2043 120.82 19.163 120.796 19.126C120.772 19.089 120.742 19.0571 120.706 19.0324L118.581 17.1381C118.552 17.1122 118.517 17.0927 118.48 17.081C118.442 17.0693 118.402 17.0657 118.363 17.0702C118.325 17.0748 118.287 17.0876 118.254 17.1077C118.22 17.1277 118.191 17.1546 118.168 17.1866C117.805 17.7103 117.318 18.1354 116.749 18.4237C116.182 18.712 115.551 18.8544 114.913 18.8381C113.116 18.8381 111.465 17.9881 111.222 15.6566H120.937C120.978 15.6604 121.018 15.6551 121.057 15.6411C121.096 15.6272 121.131 15.605 121.159 15.576C121.189 15.547 121.211 15.512 121.225 15.4735C121.239 15.4349 121.244 15.3938 121.24 15.353V14.588ZM71.757 10.5808C71.757 10.6613 71.789 10.7385 71.8459 10.7954C71.9029 10.8524 71.98 10.8843 72.0606 10.8843H74.1007V17.4053C74.1007 20.0282 75.4365 21.5582 78.2295 21.5582H80.8282C80.9085 21.5582 80.9857 21.5262 81.0427 21.4693C81.0997 21.4124 81.1312 21.3351 81.1312 21.2546V18.5224C81.135 18.4816 81.1297 18.4405 81.1162 18.4019C81.102 18.3635 81.0802 18.3284 81.051 18.2995C81.0217 18.2705 80.9872 18.2483 80.9482 18.2343C80.91 18.2204 80.8687 18.2151 80.8282 18.2189H79.0642C78.1897 18.2189 77.8987 17.9153 77.8987 17.1745V10.8904H80.7885C80.8687 10.8904 80.946 10.8584 81.003 10.8015C81.06 10.7446 81.0922 10.6673 81.0922 10.5869V7.93966C81.0922 7.85911 81.06 7.78186 81.003 7.72493C80.946 7.66801 80.8687 7.63606 80.7885 7.63606H77.8987V3.6288C77.8987 3.54828 77.8665 3.47107 77.8095 3.41414C77.7525 3.3572 77.6752 3.32522 77.595 3.32522H74.3678C74.327 3.32149 74.2858 3.32678 74.2473 3.34071C74.2088 3.35465 74.1738 3.37689 74.1448 3.40586C74.1159 3.43483 74.0936 3.46982 74.0797 3.50835C74.0658 3.54688 74.0604 3.588 74.0642 3.6288V7.61176H72.0241C71.9436 7.61176 71.8664 7.64371 71.8095 7.70071C71.7525 7.75763 71.7206 7.83481 71.7206 7.91536L71.757 10.5808ZM126.304 21.2668C126.291 21.2995 126.286 21.3349 126.289 21.3699C126.292 21.405 126.304 21.4388 126.323 21.4685C126.342 21.4982 126.368 21.5229 126.398 21.5406C126.429 21.5583 126.463 21.5685 126.499 21.5703H130.214C130.307 21.5731 130.398 21.5447 130.473 21.4897C130.548 21.4347 130.602 21.3562 130.627 21.2668L132.109 17.2352H139.588L141.106 21.2668C141.132 21.3562 141.186 21.4347 141.261 21.4897C141.336 21.5447 141.427 21.5731 141.52 21.5703H145.308C145.343 21.5685 145.378 21.5583 145.408 21.5406C145.438 21.5229 145.465 21.4982 145.483 21.4685C145.502 21.4388 145.514 21.405 145.517 21.3699C145.521 21.3349 145.516 21.2995 145.502 21.2668L138.702 3.61058C138.675 3.53016 138.622 3.46072 138.552 3.41259C138.482 3.36446 138.399 3.3402 138.313 3.34343H133.48C133.392 3.33467 133.303 3.35632 133.228 3.40484C133.153 3.45337 133.096 3.5259 133.068 3.61058L126.304 21.2668ZM41.6662 18.1581C38.4361 18.1581 36.2746 15.7538 36.2746 12.4265C36.2746 9.09931 38.4361 6.69495 41.6662 6.69495C42.554 6.70412 43.4275 6.91952 44.2178 7.32413C45.0081 7.72876 45.6934 8.31151 46.2199 9.02641C46.2423 9.06586 46.2738 9.09938 46.3117 9.12428C46.3497 9.14911 46.393 9.16448 46.4382 9.16928C46.4832 9.17401 46.5288 9.16793 46.5711 9.15158C46.6134 9.13516 46.6512 9.10891 46.6813 9.07501L49.2557 6.86495C49.3154 6.81033 49.3532 6.73591 49.3621 6.6555C49.371 6.5751 49.3505 6.49418 49.3043 6.4278C47.7256 4.12059 45.0541 2.95485 41.6784 2.95485C35.9103 2.95485 32.1095 7.25354 32.1095 12.4265C32.1095 17.6481 35.9225 21.9468 41.6784 21.9468C45.0541 21.9468 47.8956 20.5139 49.3043 18.4253C49.3512 18.3591 49.3721 18.278 49.3631 18.1974C49.3542 18.1169 49.3159 18.0424 49.2557 17.9881L46.657 15.863C46.6291 15.8297 46.5933 15.8038 46.5529 15.7876C46.5125 15.7714 46.4687 15.7654 46.4255 15.7702C46.3822 15.775 46.3408 15.7904 46.3049 15.8151C46.269 15.8398 46.2399 15.8729 46.2199 15.9116C45.6841 16.6095 44.9945 17.1743 44.2046 17.5619C43.4147 17.9494 42.546 18.1493 41.6662 18.146V18.1581ZM69.6684 2.35984H66.4504C66.4096 2.3561 66.3685 2.36139 66.33 2.37533C66.2914 2.38926 66.2565 2.41151 66.2275 2.44048C66.1985 2.46944 66.1763 2.50444 66.1623 2.54297C66.1484 2.58149 66.1432 2.62262 66.1468 2.66342V21.2425C66.1468 21.323 66.1788 21.4002 66.2358 21.4571C66.2927 21.5141 66.3699 21.5461 66.4504 21.5461H69.6532C69.7337 21.5461 69.811 21.5141 69.8679 21.4571C69.9248 21.4002 69.9567 21.323 69.9567 21.2425V2.65734C69.9605 2.61654 69.9552 2.57542 69.9413 2.53689C69.9273 2.49836 69.9051 2.46338 69.8761 2.4344C69.8472 2.40544 69.8121 2.38319 69.7737 2.36926C69.7351 2.35532 69.694 2.35003 69.6532 2.35376" fill="white"/>
        </svg>

        </Nav.Link>
      </LinkContainer>

        <ul className='navbar-nav flex-row flex-wrap ms-md-auto'>
          {/* <li>
            <LinkContainer to='/about'>
              <Nav.Link className='nav-link px-2 link-secondary'>About</Nav.Link>
            </LinkContainer>
          </li> */}
          <li className="nav-item mb-0">
            <a className="nav-link" target="blank" href="https://www.figma.com/file/66dmIPykFMzxAOpJxtw9zm/Design-Process?node-id=0%3A1">Design Process</a>
          </li>
          <li className="nav-item mx-4 mb-0">
            <a className="nav-link" target="blank" href="https://www.figma.com/file/xK3FBWEkRmFfYZtshZugTi/CultureAmp-Design-Challenge---Daniel-Wang?node-id=15%3A0">Figma mockups</a>
          </li>
          <li className="nav-item mb-0">
            <a className="nav-link" target="blank" href="https://github.com/danielwang/cultureamp">Github repo</a>
          </li>
        </ul>
      </Container>
    </nav>

  )
}

export default Menu
