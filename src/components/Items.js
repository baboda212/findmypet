/* Items.js */
import React from 'react'

function Items({animals}) {
  return (
    <div className='item'>
        {
          animals.map((animal, key) => {
            return(
                <div className='itemList'>
                    <img src={animal.popfile} alt={animal.kindCd} />
                    <div className="text">
                        <h2>유기동물정보</h2>
                        <p>공고번호 : {animal.noticeNo}</p>
                        <p>기본정보 : {animal.kindCd}, {animal.age}, {animal.sexCd}</p>
                        <p>특징 : {animal.specialMark}</p>
                        <p>유기 장소 및 발견 일자 : {animal.happenPlace}, {animal.happenDt}</p>
                        <p>공고기간 :{animal.noticeSdt} ~ {animal.noticeEdt}</p>
                        <p>상태 : {animal.processState}</p>
                        <p>보호소 : {animal.careNm} / {animal.careTel}</p>
                    </div>
                </div>
            )
          })  
        }
    </div>
  )
}

export default Items