import React from 'react';
import Image from 'next/image';
import style from './Paydaysale.module.css';

function Paydaysale() {
  return (
    <div>
      <div className={style.sale}>
        <div className={style.saleImageDiv}>
          <Image
            src="/sara.jpg"
            alt="Fashion model with shopping bags"
            width={600}  // Increased from 208
            height={800} // Increased from 480
            quality={100} // Added quality parameter
            priority // Added priority loading
            className={style.saleImage}
          />
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className={style[`star${num}`]}>
              <Image 
                src="/star.png" 
                alt="Decorative star"
                width={35} 
                height={35}
                quality={100}
              />
            </div>
          ))}
        </div>

        <div className={style.saleTextDiv}>
          <div className={style.text}>
            <div className={style.let1}>
              <div className={style.let}>
                <h1>PAYDAY</h1>
              </div>
            </div>
            <div>
              <h1 className={style.snow}>SALE NOW</h1>
            </div>
          </div>
          <div className={style.saleParaDiv}>
            <div className={style.salePara}>
              <p className={style.para1}>
                Spend minimal $100 get 30% off <br />
                voucher code for your next purchase
              </p>
              <p className={style.para2}>1st June - 10 June 2021</p>
              <p className={style.terms}>*Terms and conditions applied</p>
            </div>
            <div className={style.btn}>
              <button className={style.shopButton}>SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Paydaysale;