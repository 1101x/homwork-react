import React, { createElement } from 'https://esm.sh/react';
import { createRoot } from 'https://esm.sh/react-dom'; //q1. cdn 주소들은 어디서 온걸까..

const 리액트객체 = createElement('span', { id: 'sr-only' }, '난 울지 않아');

const 썸네일2 = {
  title: '환승연애3',
  src: 'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231204/0755/P001749878.jpg/dims/resize/F_webp,480',
  alt: '환승연애3 포스터',
};
const 썸네일크기 = {
  width: '200px',
};

const 헤더 = (
  <header className="헤더" style={{ background: 'black' }}>
    <a href="https://jfam.netlify.app/" target="_black">
      jfam
    </a>
  </header>
);

const 메인배너 = (
  <section
    className="bigbanner"
    style={{ background: 'SteelBlue', height: '200px' }}
  >
    <h2 className="sr-only">최상단 배너 영역</h2>
  </section>
);

const 프로그램1 = (
  <section className="programs">
    <h2>JFAM에서 꼭 봐야하는 콘텐츠</h2>
    <div className="wrapper">
      <div style={{ background: 'RosyBrown' }}>
        <figure>
          <a
            href="https://search.naver.com/search.naver?where=nexearch&sm=top_sug.pre&fbm=0&acr=1&acq=%EC%9B%B0%EC%BB%B4&qdt=0&ie=utf8&query=%EC%9B%B0%EC%BB%B4%ED%88%AC%EC%82%BC%EB%8B%AC%EB%A6%AC"
            target="_black"
          >
            <img
              style={썸네일크기}
              src="https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231202/1025/P001749248.jpg/dims/resize/F_webp,480"
              alt="웰컴투삼달리 포스터"
            ></img>
          </a>
          <figcaption>웰컴투삼달리</figcaption>
        </figure>
      </div>
      <div style={{ background: 'Goldenrod' }}>
        <figure>
          <a
            href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%ED%99%98%EC%8A%B9%EC%97%B0%EC%95%A03&oquery=%EC%9B%B0%EC%BB%B4%ED%88%AC%EC%82%BC%EB%8B%AC%EB%A6%AC&tqi=ij0x%2BwqVN8ossZyJ2V8ssssssiC-143917"
            target="_black"
          >
            <img style={썸네일크기} src={썸네일2.src} alt={썸네일2.alt}></img>
          </a>
          <figcaption>{썸네일2.title}</figcaption>
        </figure>
      </div>
    </div>
  </section>
);

const 푸터 = (
  <footer className="footer" style={{ background: 'black' }}>
    <p>copyright © 주식회사 이듬 All right reserved.</p>
    <address>
      웹 사이트 문의 : <a href="mailto:000@0000.000"> 000@0000.000</a>
      <a href="tel:+82 0200000000"> +82 (02) 0000-0000</a>
    </address>
  </footer>
);

const 요소잡기 = document.getElementById('root');
const 리액트돔아이유생성 = createRoot(요소잡기);
리액트돔아이유생성.render(리액트객체);

const 터잡기1 = document.createElement('div');
터잡기1.setAttribute('id', 'header');
document.body.append(터잡기1);
const 리액트돔생성1 = createRoot(터잡기1);
리액트돔생성1.render(헤더);

const 터잡기2 = document.createElement('main');
터잡기2.setAttribute('id', 'contents');
document.body.append(터잡기2);
const 리액트돔생성2 = createRoot(터잡기2);
리액트돔생성2.render(메인배너);

const 터잡기3 = document.createElement('div'); //q2. main 안으로 넣고 싶다
터잡기3.setAttribute('id', 'programs01');
document.body.append(터잡기3);
const 리액트돔생성3 = createRoot(터잡기3);
리액트돔생성3.render(프로그램1);

const 터잡기4 = document.createElement('div');
터잡기4.setAttribute('id', 'footer');
document.body.append(터잡기4);
const 리액트돔생성4 = createRoot(터잡기4);
리액트돔생성4.render(푸터);
