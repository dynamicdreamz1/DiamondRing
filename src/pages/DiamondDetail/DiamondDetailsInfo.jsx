import React from 'react'
import { useSelector } from 'react-redux';

const DiamondDetailsInfo = () => {
  const { diamond } = useSelector((state) => state.singleDiamond);

  const handleViewCertificateClick = () => {
    if (diamond.diamond.certificate.lab === "GIA") {
      window.open(`https://www.gia.edu/report-check-landing?reportno=${diamond.diamond.certificate.certNumber}`, '_blank');
    } else if (diamond.diamond.certificate.lab === "IGI") {
      window.open(`https://www.igi.org/verify-your-report/?r=${diamond.diamond.certificate.certNumber}`, '_blank');
    } else {
      console.error("Unknown certificate lab");
    }
  };


  return (
    <div className="StoneProductInfo rounded-2.5xl p-3 bg-customGray-150 mt-4 mb-4">
      <h3 className="StoneProductInfo__title flex items-center gap-2 mb-2" tabindex="-1">
        <svg className="w-8 h-8 p-1.5 rounded-full bg-white" aria-hidden="true" focusable="false">
          <svg viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.01367 4.89352L4.89544 1H13.1046L16.9864 4.89352L8.99616 12L1.01367 4.89352Z" stroke="currentColor" stroke-width="0.75" stroke-miterlimit="10"></path>
            <path d="M7.2402 7.01938L4.95605 4.9178L6.46358 3.40613" stroke="currentColor" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round"></path>
            <path d="M8.99658 11.9023L12.5521 4.92818L9.82583 1.01196" stroke="currentColor" stroke-width="0.75" stroke-miterlimit="10"></path>
          </svg>
        </svg>
        Your  Diamond Info
      </h3>
      <div className='cpcst-info-container'>
        <div className='cpcst-details-wrapper grid grid-cols-2 gap-2 items-stretch'>
          <div className="StoneDetailBlock p-3 flex flex-col justify-between" data-current-block="carat">
            <div className="StoneDetailBlock__header-container flex items-center justify-between gap-2 text-customGray-500 mb-2">
              <div className="StoneDetailBlock__title-container flex items-center gap-1">
                <svg className="w-4 h-4" aria-hidden="true" focusable="false">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.91838 7.2041H5.77426C5.77426 8.22221 4.93648 9.05998 3.91838 9.05998C2.90028 9.05998 2.0625 8.22221 2.0625 7.2041H3.91838Z" stroke="#EF8D33" stroke-width="0.75" stroke-linejoin="round"></path>
                    <path d="M3.9185 3.59375L2.1626 7.2042H5.6744L3.9185 3.59375Z" stroke="#EF8D33" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M11.082 7.2041H12.9378C12.9378 8.22221 12.1001 9.05998 11.082 9.05998C10.0639 9.05998 9.22607 8.2222 9.22607 7.2041H11.082V7.2041Z" stroke="#EF8D33" stroke-width="0.75" stroke-linejoin="round"></path>
                    <path d="M11.0816 3.59375L9.32568 7.2042H12.8375L11.0816 3.59375Z" stroke="#EF8D33" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M3.91846 3.59375H11.0815" stroke="#EF8D33" stroke-width="0.75" stroke-linejoin="round"></path>
                    <path d="M7.49951 2.8125V9.87541" stroke="#EF8D33" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M7.49978 9.87549L4.23486 12.1876H10.7647L7.49978 9.87549Z" stroke="#EF8D33" stroke-width="0.75" stroke-linejoin="round"></path>
                  </svg>
                </svg>
                <p className="cpcst-detail-title" tabindex="-1">Carat</p>
              </div>
            </div>
            <div className="StoneDetailBlock__content-container flex-1 mb-2 lg:mb-3">
              <p className="StoneDetailBlock__content-value" tabindex="-1">{diamond?.diamond?.certificate?.carats}</p>
            </div>
            <div className="StoneDetailBlock__desc">Universal measurement unit for diamonds</div>
          </div>
          <div className='StoneDetailBlock p-3 flex flex-col justify-between' data-current-block="color">
            <div className="StoneDetailBlock__header-container flex items-center justify-between gap-2 text-customGray-500 mb-2"><div className="StoneDetailBlock__title-container flex items-center gap-1"><svg className="w-4 h-4" aria-hidden="true" focusable="false"><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.65441 8.86331C5.85951 8.86331 6.03403 8.78887 6.17799 8.63998C6.32195 8.49109 6.39393 8.31902 6.39393 8.12379C6.39393 7.92856 6.32195 7.7565 6.17799 7.60761C6.03403 7.45872 5.8595 7.38428 5.65441 7.38428C5.45918 7.38428 5.28959 7.45872 5.14562 7.60761C5.00166 7.7565 4.92969 7.92856 4.92969 8.12379C4.92969 8.31902 5.00166 8.49109 5.14562 8.63998C5.28959 8.78887 5.45919 8.86331 5.65441 8.86331Z" fill="#B71B9E"></path><path d="M6.86648 6.37464C7.06171 6.37464 7.23106 6.30267 7.37452 6.1587C7.51849 6.01524 7.59046 5.84589 7.59046 5.65066C7.59046 5.44507 7.51849 5.2703 7.37452 5.12634C7.23106 4.98287 7.06171 4.91113 6.86648 4.91113C6.66089 4.91113 6.48612 4.98287 6.34216 5.12634C6.19869 5.2703 6.12695 5.44507 6.12695 5.65066C6.12695 5.84589 6.19869 6.01524 6.34216 6.1587C6.48612 6.30267 6.66089 6.37464 6.86648 6.37464Z" fill="#B71B9E"></path><path d="M9.73376 5.98743C9.929 5.98743 10.1011 5.91546 10.2499 5.7715C10.3988 5.62803 10.4733 5.45868 10.4733 5.26345C10.4733 5.05787 10.4015 4.88309 10.2581 4.73913C10.1141 4.59566 9.93933 4.52393 9.73375 4.52393C9.53851 4.52393 9.36917 4.59566 9.2257 4.73913C9.08174 4.88309 9.00977 5.05787 9.00977 5.26345C9.00977 5.45869 9.08174 5.62803 9.2257 5.7715C9.36917 5.91546 9.53852 5.98743 9.73375 5.98743H9.73376Z" fill="#B71B9E"></path><path d="M11.1047 8.22366C11.3 8.22366 11.4696 8.14922 11.6135 8.00033C11.7575 7.85144 11.8295 7.67937 11.8295 7.48414C11.8295 7.28892 11.7575 7.11685 11.6135 6.96796C11.4696 6.81907 11.3 6.74463 11.1047 6.74463C10.8997 6.74463 10.7251 6.81907 10.5812 6.96796C10.4372 7.11685 10.3652 7.28892 10.3652 7.48414C10.3652 7.67937 10.4372 7.85144 10.5812 8.00033C10.7251 8.14922 10.8997 8.22366 11.1047 8.22366Z" fill="#B71B9E"></path><path d="M8.48364 13C8.6135 13 8.71376 12.954 8.78441 12.8621C8.85453 12.7696 8.8896 12.6857 8.8896 12.6104C8.8896 12.4369 8.81116 12.2907 8.65428 12.1717C8.49741 12.0528 8.41897 11.7985 8.41897 11.4089C8.41897 10.9975 8.55974 10.6458 8.84128 10.3539C9.1223 10.0615 9.46307 9.91522 9.86357 9.91522H10.9677C11.725 9.91522 12.3364 9.6555 12.8018 9.13604C13.2673 8.61659 13.5 8.01609 13.5 7.33458C13.5 6.10087 13.0237 5.07001 12.071 4.24201C11.1188 3.41401 9.97733 3 8.64649 3C7.20708 3 5.98948 3.48699 4.99368 4.46097C3.9979 5.43494 3.5 6.61462 3.5 8C3.5 9.38538 3.98699 10.5651 4.96097 11.539C5.93494 12.513 7.10917 13 8.48364 13V13Z" stroke="#B71B9E" stroke-width="0.75" stroke-miterlimit="10"></path></svg></svg>
              <p className="cpcst-detail-title" tabindex="-1">Color</p></div><button type="button" data-container=".cped-container" className="cpcst-details-item-tip cursor-pointer" data-click="colorRange" title="details">
                <svg class="cpcst-details-item-tip-icon cursor-pointer text-inherit opacity-30 w-4 h-4" aria-hidden="true" focusable="false"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="none"><g><path d="M5 0C4.0111 0 3.0444 0.293245 2.22215 0.842652C1.39991 1.39206 0.759043 2.17295 0.380605 3.08658C0.00216642 4.00021 -0.0968503 5.00555 0.0960759 5.97545C0.289002 6.94536 0.765206 7.83627 1.46447 8.53553C2.16373 9.2348 3.05465 9.711 4.02455 9.90393C4.99446 10.0969 5.99979 9.99784 6.91342 9.6194C7.82705 9.24096 8.60794 8.6001 9.15735 7.77785C9.70676 6.95561 10 5.98891 10 5C9.99952 3.67407 9.47258 2.40257 8.53501 1.465C7.59743 0.527418 6.32594 0.000479728 5 0V0ZM5.5 7.75696C5.5 7.82142 5.47439 7.88323 5.42881 7.92881C5.38324 7.97439 5.32142 8 5.25696 8H4.74304C4.67859 8 4.61677 7.97439 4.57119 7.92881C4.52561 7.88323 4.50001 7.82142 4.5 7.75696V7.24304C4.50001 7.17858 4.52561 7.11677 4.57119 7.07119C4.61677 7.02561 4.67859 7 4.74304 7H5.25696C5.32142 7 5.38324 7.02561 5.42881 7.07119C5.47439 7.11677 5.5 7.17858 5.5 7.24304V7.75696ZM5.51685 6.30023C5.50554 6.35715 5.47464 6.40831 5.42953 6.44481C5.38441 6.48131 5.32792 6.50084 5.2699 6.5H4.7721C4.73536 6.49956 4.69914 6.49132 4.66583 6.47584C4.63251 6.46035 4.60287 6.43797 4.57885 6.41017C4.55483 6.38237 4.53699 6.34979 4.5265 6.31459C4.51601 6.27938 4.51312 6.24235 4.51801 6.20594C4.68335 4.92078 5.93256 4.93372 5.99738 4.07094C6.01172 3.8312 5.9405 3.59415 5.79638 3.40202C5.65227 3.2099 5.44463 3.07517 5.21045 3.02185C5.07892 2.99399 4.94313 2.99285 4.81116 3.01851C4.67918 3.04417 4.55371 3.0961 4.4422 3.17121C4.33068 3.24632 4.23541 3.34308 4.16204 3.45574C4.08866 3.5684 4.03869 3.69467 4.01508 3.82703C4.00945 3.87363 3.98734 3.91668 3.95274 3.94841C3.91814 3.98013 3.87333 3.99843 3.82642 4H3.21497C3.18714 4.00043 3.15952 3.99507 3.13388 3.98426C3.10823 3.97346 3.0851 3.95745 3.06597 3.93724C3.04683 3.91703 3.0321 3.89306 3.02271 3.86686C3.01332 3.84066 3.00947 3.8128 3.01142 3.78504C3.04047 3.51637 3.12365 3.25638 3.25593 3.02074C3.38821 2.7851 3.56684 2.5787 3.78107 2.41398C3.99529 2.24926 4.24066 2.12965 4.50238 2.06235C4.76409 1.99505 5.03673 1.98146 5.30384 2.0224C5.72467 2.09364 6.1125 2.29528 6.41253 2.59886C6.71257 2.90243 6.90965 3.29259 6.97595 3.71424C7.2075 5.14838 5.69422 5.28296 5.51685 6.30023Z" fill="currentColor"></path></g></svg></svg></button></div>
            <div className='StoneDetailBlock__content-container flex-1 mb-2 lg:mb-3'>
              <p className='StoneDetailBlock__content-value'>{diamond?.diamond?.certificate?.color}</p>
              <div className='StoneDetailBlock__content-image-container mt-2.5 relative flex items-center gap-1'>
                <img className='StoneDetailBlock__content-image' src="https://cdn.shopify.com/oxygen-v2/24658/9071/18525/1161720/build/_assets/stoneColorBG-HNKUR277.png" alt="" />
              </div>
            </div>
            <div className="StoneDetailBlock__desc">Completely colorless</div>
          </div>
          <div className='StoneDetailBlock p-3 flex flex-col justify-between' data-current-block="clarity">
            <div className="StoneDetailBlock__header-container flex items-center justify-between gap-2 text-customGray-500 mb-2">
              <div className="StoneDetailBlock__title-container flex items-center gap-1">
                <svg className="w-4 h-4" aria-hidden="true" focusable="false"><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.65441 8.86331C5.85951 8.86331 6.03403 8.78887 6.17799 8.63998C6.32195 8.49109 6.39393 8.31902 6.39393 8.12379C6.39393 7.92856 6.32195 7.7565 6.17799 7.60761C6.03403 7.45872 5.8595 7.38428 5.65441 7.38428C5.45918 7.38428 5.28959 7.45872 5.14562 7.60761C5.00166 7.7565 4.92969 7.92856 4.92969 8.12379C4.92969 8.31902 5.00166 8.49109 5.14562 8.63998C5.28959 8.78887 5.45919 8.86331 5.65441 8.86331Z" fill="#B71B9E"></path><path d="M6.86648 6.37464C7.06171 6.37464 7.23106 6.30267 7.37452 6.1587C7.51849 6.01524 7.59046 5.84589 7.59046 5.65066C7.59046 5.44507 7.51849 5.2703 7.37452 5.12634C7.23106 4.98287 7.06171 4.91113 6.86648 4.91113C6.66089 4.91113 6.48612 4.98287 6.34216 5.12634C6.19869 5.2703 6.12695 5.44507 6.12695 5.65066C6.12695 5.84589 6.19869 6.01524 6.34216 6.1587C6.48612 6.30267 6.66089 6.37464 6.86648 6.37464Z" fill="#B71B9E"></path><path d="M9.73376 5.98743C9.929 5.98743 10.1011 5.91546 10.2499 5.7715C10.3988 5.62803 10.4733 5.45868 10.4733 5.26345C10.4733 5.05787 10.4015 4.88309 10.2581 4.73913C10.1141 4.59566 9.93933 4.52393 9.73375 4.52393C9.53851 4.52393 9.36917 4.59566 9.2257 4.73913C9.08174 4.88309 9.00977 5.05787 9.00977 5.26345C9.00977 5.45869 9.08174 5.62803 9.2257 5.7715C9.36917 5.91546 9.53852 5.98743 9.73375 5.98743H9.73376Z" fill="#B71B9E"></path><path d="M11.1047 8.22366C11.3 8.22366 11.4696 8.14922 11.6135 8.00033C11.7575 7.85144 11.8295 7.67937 11.8295 7.48414C11.8295 7.28892 11.7575 7.11685 11.6135 6.96796C11.4696 6.81907 11.3 6.74463 11.1047 6.74463C10.8997 6.74463 10.7251 6.81907 10.5812 6.96796C10.4372 7.11685 10.3652 7.28892 10.3652 7.48414C10.3652 7.67937 10.4372 7.85144 10.5812 8.00033C10.7251 8.14922 10.8997 8.22366 11.1047 8.22366Z" fill="#B71B9E"></path><path d="M8.48364 13C8.6135 13 8.71376 12.954 8.78441 12.8621C8.85453 12.7696 8.8896 12.6857 8.8896 12.6104C8.8896 12.4369 8.81116 12.2907 8.65428 12.1717C8.49741 12.0528 8.41897 11.7985 8.41897 11.4089C8.41897 10.9975 8.55974 10.6458 8.84128 10.3539C9.1223 10.0615 9.46307 9.91522 9.86357 9.91522H10.9677C11.725 9.91522 12.3364 9.6555 12.8018 9.13604C13.2673 8.61659 13.5 8.01609 13.5 7.33458C13.5 6.10087 13.0237 5.07001 12.071 4.24201C11.1188 3.41401 9.97733 3 8.64649 3C7.20708 3 5.98948 3.48699 4.99368 4.46097C3.9979 5.43494 3.5 6.61462 3.5 8C3.5 9.38538 3.98699 10.5651 4.96097 11.539C5.93494 12.513 7.10917 13 8.48364 13V13Z" stroke="#B71B9E" stroke-width="0.75" stroke-miterlimit="10"></path></svg></svg><p class="cpcst-detail-title" tabindex="-1">CLARITY</p></div><button type="button" data-container=".cped-container" class="cpcst-details-item-tip cursor-pointer" data-click="colorRange" title="details"><svg class="cpcst-details-item-tip-icon cursor-pointer text-inherit opacity-30 w-4 h-4" aria-hidden="true" focusable="false"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="none"><g><path d="M5 0C4.0111 0 3.0444 0.293245 2.22215 0.842652C1.39991 1.39206 0.759043 2.17295 0.380605 3.08658C0.00216642 4.00021 -0.0968503 5.00555 0.0960759 5.97545C0.289002 6.94536 0.765206 7.83627 1.46447 8.53553C2.16373 9.2348 3.05465 9.711 4.02455 9.90393C4.99446 10.0969 5.99979 9.99784 6.91342 9.6194C7.82705 9.24096 8.60794 8.6001 9.15735 7.77785C9.70676 6.95561 10 5.98891 10 5C9.99952 3.67407 9.47258 2.40257 8.53501 1.465C7.59743 0.527418 6.32594 0.000479728 5 0V0ZM5.5 7.75696C5.5 7.82142 5.47439 7.88323 5.42881 7.92881C5.38324 7.97439 5.32142 8 5.25696 8H4.74304C4.67859 8 4.61677 7.97439 4.57119 7.92881C4.52561 7.88323 4.50001 7.82142 4.5 7.75696V7.24304C4.50001 7.17858 4.52561 7.11677 4.57119 7.07119C4.61677 7.02561 4.67859 7 4.74304 7H5.25696C5.32142 7 5.38324 7.02561 5.42881 7.07119C5.47439 7.11677 5.5 7.17858 5.5 7.24304V7.75696ZM5.51685 6.30023C5.50554 6.35715 5.47464 6.40831 5.42953 6.44481C5.38441 6.48131 5.32792 6.50084 5.2699 6.5H4.7721C4.73536 6.49956 4.69914 6.49132 4.66583 6.47584C4.63251 6.46035 4.60287 6.43797 4.57885 6.41017C4.55483 6.38237 4.53699 6.34979 4.5265 6.31459C4.51601 6.27938 4.51312 6.24235 4.51801 6.20594C4.68335 4.92078 5.93256 4.93372 5.99738 4.07094C6.01172 3.8312 5.9405 3.59415 5.79638 3.40202C5.65227 3.2099 5.44463 3.07517 5.21045 3.02185C5.07892 2.99399 4.94313 2.99285 4.81116 3.01851C4.67918 3.04417 4.55371 3.0961 4.4422 3.17121C4.33068 3.24632 4.23541 3.34308 4.16204 3.45574C4.08866 3.5684 4.03869 3.69467 4.01508 3.82703C4.00945 3.87363 3.98734 3.91668 3.95274 3.94841C3.91814 3.98013 3.87333 3.99843 3.82642 4H3.21497C3.18714 4.00043 3.15952 3.99507 3.13388 3.98426C3.10823 3.97346 3.0851 3.95745 3.06597 3.93724C3.04683 3.91703 3.0321 3.89306 3.02271 3.86686C3.01332 3.84066 3.00947 3.8128 3.01142 3.78504C3.04047 3.51637 3.12365 3.25638 3.25593 3.02074C3.38821 2.7851 3.56684 2.5787 3.78107 2.41398C3.99529 2.24926 4.24066 2.12965 4.50238 2.06235C4.76409 1.99505 5.03673 1.98146 5.30384 2.0224C5.72467 2.09364 6.1125 2.29528 6.41253 2.59886C6.71257 2.90243 6.90965 3.29259 6.97595 3.71424C7.2075 5.14838 5.69422 5.28296 5.51685 6.30023Z" fill="currentColor"></path></g></svg></svg></button></div>
            <div className='StoneDetailBlock__content-container flex-1 mb-2 lg:mb-3'>
              <p className='StoneDetailBlock__content-value'>{diamond?.diamond?.certificate?.clarity}</p>
              <div className='StoneDetailBlock__content-image-container mt-2.5 relative flex items-center gap-1'>
                <img className='StoneDetailBlock__content-image' src="https://cdn.shopify.com/oxygen-v2/24658/9071/18525/1161720/build/_assets/stoneClarityBG-EISDTFPI.png" alt="" />
              </div>
            </div>
            <div className="StoneDetailBlock__desc">Hard to see inclusions even under 10x magnification</div>
          </div>
          <div className="StoneDetailBlock p-3 flex flex-col justify-between" data-current-block="cut">
            <div className="StoneDetailBlock__header-container flex items-center justify-between gap-2 text-customGray-500 mb-2">
              <div className="StoneDetailBlock__title-container flex items-center gap-1">
                <svg className="w-4 h-4" aria-hidden="true" focusable="false"><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M1.50781 7.30243L4.37667 4.43262H10.4437L13.3126 7.30243L7.40733 12.5404L1.50781 7.30243Z" stroke="#1A93C7" stroke-width="0.75" stroke-miterlimit="10"></path><path d="M5.17558 7.23696L7.10057 10.3052L3.81494 7.38886L5.47519 5.72852L5.17558 7.23696Z" fill="#1A93C7"></path><path d="M7.40771 12.4684L10.0354 7.32795L8.02057 4.44141" stroke="#1A93C7" stroke-width="0.75" stroke-miterlimit="10"></path><path d="M15.2645 9.25526L7.71191 1.7002" stroke="#1A93C7" stroke-width="0.75" stroke-miterlimit="10"></path><path d="M5.42334 14.3001L15.4926 5.36865" stroke="#1A93C7" stroke-width="0.75" stroke-miterlimit="10"></path></g></svg></svg>
                <p className="cpcst-detail-title" tabindex="-1">cut</p>
              </div>
              <button type="button" data-container=".cped-container" className="cpcst-details-item-tip cursor-pointer" data-click="cutRange" title="details"><svg className="cpcst-details-item-tip-icon cursor-pointer text-inherit opacity-30 w-4 h-4" aria-hidden="true" focusable="false"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="none"><g><path d="M5 0C4.0111 0 3.0444 0.293245 2.22215 0.842652C1.39991 1.39206 0.759043 2.17295 0.380605 3.08658C0.00216642 4.00021 -0.0968503 5.00555 0.0960759 5.97545C0.289002 6.94536 0.765206 7.83627 1.46447 8.53553C2.16373 9.2348 3.05465 9.711 4.02455 9.90393C4.99446 10.0969 5.99979 9.99784 6.91342 9.6194C7.82705 9.24096 8.60794 8.6001 9.15735 7.77785C9.70676 6.95561 10 5.98891 10 5C9.99952 3.67407 9.47258 2.40257 8.53501 1.465C7.59743 0.527418 6.32594 0.000479728 5 0V0ZM5.5 7.75696C5.5 7.82142 5.47439 7.88323 5.42881 7.92881C5.38324 7.97439 5.32142 8 5.25696 8H4.74304C4.67859 8 4.61677 7.97439 4.57119 7.92881C4.52561 7.88323 4.50001 7.82142 4.5 7.75696V7.24304C4.50001 7.17858 4.52561 7.11677 4.57119 7.07119C4.61677 7.02561 4.67859 7 4.74304 7H5.25696C5.32142 7 5.38324 7.02561 5.42881 7.07119C5.47439 7.11677 5.5 7.17858 5.5 7.24304V7.75696ZM5.51685 6.30023C5.50554 6.35715 5.47464 6.40831 5.42953 6.44481C5.38441 6.48131 5.32792 6.50084 5.2699 6.5H4.7721C4.73536 6.49956 4.69914 6.49132 4.66583 6.47584C4.63251 6.46035 4.60287 6.43797 4.57885 6.41017C4.55483 6.38237 4.53699 6.34979 4.5265 6.31459C4.51601 6.27938 4.51312 6.24235 4.51801 6.20594C4.68335 4.92078 5.93256 4.93372 5.99738 4.07094C6.01172 3.8312 5.9405 3.59415 5.79638 3.40202C5.65227 3.2099 5.44463 3.07517 5.21045 3.02185C5.07892 2.99399 4.94313 2.99285 4.81116 3.01851C4.67918 3.04417 4.55371 3.0961 4.4422 3.17121C4.33068 3.24632 4.23541 3.34308 4.16204 3.45574C4.08866 3.5684 4.03869 3.69467 4.01508 3.82703C4.00945 3.87363 3.98734 3.91668 3.95274 3.94841C3.91814 3.98013 3.87333 3.99843 3.82642 4H3.21497C3.18714 4.00043 3.15952 3.99507 3.13388 3.98426C3.10823 3.97346 3.0851 3.95745 3.06597 3.93724C3.04683 3.91703 3.0321 3.89306 3.02271 3.86686C3.01332 3.84066 3.00947 3.8128 3.01142 3.78504C3.04047 3.51637 3.12365 3.25638 3.25593 3.02074C3.38821 2.7851 3.56684 2.5787 3.78107 2.41398C3.99529 2.24926 4.24066 2.12965 4.50238 2.06235C4.76409 1.99505 5.03673 1.98146 5.30384 2.0224C5.72467 2.09364 6.1125 2.29528 6.41253 2.59886C6.71257 2.90243 6.90965 3.29259 6.97595 3.71424C7.2075 5.14838 5.69422 5.28296 5.51685 6.30023Z" fill="currentColor"></path></g></svg></svg></button>
            </div>
            <div className="StoneDetailBlock__content-container flex-1 mb-2 lg:mb-3">
              <p className="StoneDetailBlock__content-value" tabindex="-1">{diamond?.diamond?.certificate?.cut}</p>
            </div>
            <div className="StoneDetailBlock__desc">Decent fire and sparkle</div>
          </div>
          <div className="StoneDetailBlock p-3 flex flex-col justify-between" data-current-block="dimensions (mm)">
            <div className="StoneDetailBlock__header-container flex items-center justify-between gap-2 text-customGray-500 mb-2">
              <div className="StoneDetailBlock__title-container flex items-center gap-1">
                <svg className="w-4 h-4" aria-hidden="true" focusable="false"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.4203 5.07471H3.57971C3.25955 5.07471 3 5.43744 3 5.8849V10.1384C3 10.5859 3.25955 10.9486 3.57971 10.9486H12.4203C12.7405 10.9486 13 10.5859 13 10.1384V5.8849C13 5.43744 12.7405 5.07471 12.4203 5.07471Z" stroke="#0E98A0" stroke-width="0.75" stroke-miterlimit="10"></path><path d="M5.5 5.05176V7.99292" stroke="#0E98A0" stroke-width="0.75" stroke-miterlimit="10"></path><path d="M8 5.05176V7.99292" stroke="#0E98A0" stroke-width="0.75" stroke-miterlimit="10"></path><path d="M10.5 5.05176V7.99292" stroke="#0E98A0" stroke-width="0.75" stroke-miterlimit="10"></path></svg></svg>
                <p className="cpcst-detail-title" tabindex="-1">DIMENSIONS (MM)</p>
              </div>

            </div>
            <div className="StoneDetailBlock__content-container flex-1 mb-2 lg:mb-3">
              <p className="StoneDetailBlock__content-value" tabindex="-1"> {diamond?.diamond?.certificate
                ? `${parseFloat(diamond.diamond.certificate.length).toFixed(2)} * ${parseFloat(diamond.diamond.certificate.width).toFixed(2)}`
                : "N/A"}
              </p>
              <div className='StoneDetailBlock__content-image-container mt-2.5 relative flex items-center gap-1'>
                <img className="StoneDetailBlock__content-image" src="https://cdn.shopify.com/oxygen-v2/24658/9071/18525/1161720/build/_assets/stoneDimensions-V2IG3DFU.png" alt="" />
              </div>
            </div>
            <div className="StoneDetailBlock__desc">Ratio: 1</div>
          </div>
          <div className="StoneDetailBlock p-3 flex flex-col justify-between" data-current-block="dimensions (mm)">
            <div className="StoneDetailBlock__header-container flex items-center justify-between gap-2 text-customGray-500 mb-2">
              <div className="StoneDetailBlock__title-container flex items-center gap-1">
                <svg className="w-4 h-4" aria-hidden="true" focusable="false"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.4203 5.07471H3.57971C3.25955 5.07471 3 5.43744 3 5.8849V10.1384C3 10.5859 3.25955 10.9486 3.57971 10.9486H12.4203C12.7405 10.9486 13 10.5859 13 10.1384V5.8849C13 5.43744 12.7405 5.07471 12.4203 5.07471Z" stroke="#0E98A0" stroke-width="0.75" stroke-miterlimit="10"></path><path d="M5.5 5.05176V7.99292" stroke="#0E98A0" stroke-width="0.75" stroke-miterlimit="10"></path><path d="M8 5.05176V7.99292" stroke="#0E98A0" stroke-width="0.75" stroke-miterlimit="10"></path><path d="M10.5 5.05176V7.99292" stroke="#0E98A0" stroke-width="0.75" stroke-miterlimit="10"></path></svg></svg>
                <p className="cpcst-detail-title" tabindex="-1">CERTIFICATION</p>
              </div>

            </div>
            <div className="StoneDetailBlock__content-container flex-1 mb-2 lg:mb-3">
              <p className="StoneDetailBlock__content-value" tabindex="-1">{diamond?.diamond?.certificate.lab}</p>
              <div className='StoneDetailBlock__content-image-container mt-2.5 relative flex items-center gap-1'>
                <img
                  className="DiamondCertificate__Image w-full aspect-square fadeIn object-cover max-w-[8rem]"
                  src={`${diamond?.diamond?.certificate.lab === "IGI" ?
                    "https://cdn.shopify.com/oxygen-v2/24658/9071/18525/1178499/build/_assets/kzr-icon-igi-crt-GAZVFCK3.svg"
                    : "https://cdn.shopify.com/oxygen-v2/24658/9071/18525/1161720/build/_assets/kzr-icon-gia-crt-N3UI7WNQ.svg"
                    }`} alt=""
                />
                <div className="StoneDetailBlock__certificate-title whitespace-pre-line">{diamond?.diamond?.certificate?.labgrown === true ? "Natural Diamond" : "Lab Diamond"}</div>
              </div>
            </div>
            <div className="StoneDetailBlock__desc">
              <button onClick={handleViewCertificateClick}>View Certificate</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiamondDetailsInfo