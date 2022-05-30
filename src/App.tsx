import { useState, useRef } from "react";
import "./App.css";

function App() {
  const headerRef1 = useRef<HTMLHeadingElement>(null);
  const headerRef2 = useRef<HTMLHeadingElement>(null);
  const headerRef3 = useRef<HTMLHeadingElement>(null);
  const headerRef4 = useRef<HTMLHeadingElement>(null);
  const scrollFunc = (ref: React.RefObject<HTMLHeadingElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToTop = () => {
    globalThis.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="App">
      <button onClick={() => scrollFunc(headerRef1)}>Go to Header 1</button>
      <button onClick={() => scrollFunc(headerRef2)}>Go to Header 2</button>
      <button onClick={() => scrollFunc(headerRef3)}>Go to Header 3</button>
      <button onClick={() => scrollFunc(headerRef4)}>Go to Header 4</button>
      <h2 ref={headerRef1}>lorem 1</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        molestiae eveniet est deleniti. Pariatur suscipit nulla accusamus
        repellat rerum est, blanditiis libero, impedit non, ad iure vel! Nisi,
        distinctio praesentium numquam voluptatibus est dolorum eligendi
        pariatur iure sequi veniam a, blanditiis vitae culpa mollitia.
        Distinctio dolores explicabo reiciendis quos optio. Rerum eveniet
        numquam laboriosam fuga eius magni, itaque recusandae doloribus sint
        nemo impedit distinctio neque nobis architecto rem doloremque deserunt
        blanditiis autem! Dicta earum ipsam pariatur accusamus, aliquam
        reprehenderit animi non tempora ducimus vel tempore ipsum. Sunt quisquam
        error veniam nihil sint voluptatum impedit quasi eius eligendi
        recusandae. Neque tenetur ab temporibus veniam quod deserunt. Quibusdam
        architecto soluta, hic, fugit maiores eum earum incidunt dolor facilis
        dicta voluptate, libero voluptatum ipsam! Accusamus nam numquam eius
        quia delectus ducimus, eaque unde quod cupiditate cum distinctio, culpa
        magnam, quasi accusantium enim. Corrupti suscipit, cumque vitae nostrum
        alias ipsam aspernatur libero illum pariatur dignissimos voluptatibus
        minus, inventore totam ullam. Possimus impedit facilis recusandae.
        Cumque tempore similique ipsa mollitia id totam nihil, tempora, at
        perferendis quas rem. Ipsa fugiat nesciunt placeat vero minima optio
        repudiandae laboriosam tempore eligendi natus eos, nostrum velit
        accusamus assumenda omnis doloribus quae dolorem facere, odit fugit
        consequuntur. Dolore ducimus qui dicta accusantium ea? Blanditiis,
        labore ipsum. Doloremque dignissimos error maiores dolorum sed fugit
        voluptates esse numquam veniam facere earum, nemo quibusdam repellendus
        nam tenetur eos incidunt explicabo tempore fugiat quas possimus quia
        reiciendis dicta! Dignissimos, eveniet possimus reiciendis a nulla dicta
        quisquam expedita ex laborum deserunt facilis autem corrupti!
      </p>
      <h2 ref={headerRef2}>lorem 2</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        molestiae eveniet est deleniti. Pariatur suscipit nulla accusamus
        repellat rerum est, blanditiis libero, impedit non, ad iure vel! Nisi,
        distinctio praesentium numquam voluptatibus est dolorum eligendi
        pariatur iure sequi veniam a, blanditiis vitae culpa mollitia.
        Distinctio dolores explicabo reiciendis quos optio. Rerum eveniet
        numquam laboriosam fuga eius magni, itaque recusandae doloribus sint
        nemo impedit distinctio neque nobis architecto rem doloremque deserunt
        blanditiis autem! Dicta earum ipsam pariatur accusamus, aliquam
        reprehenderit animi non tempora ducimus vel tempore ipsum. Sunt quisquam
        error veniam nihil sint voluptatum impedit quasi eius eligendi
        recusandae. Neque tenetur ab temporibus veniam quod deserunt. Quibusdam
        architecto soluta, hic, fugit maiores eum earum incidunt dolor facilis
        dicta voluptate, libero voluptatum ipsam! Accusamus nam numquam eius
        quia delectus ducimus, eaque unde quod cupiditate cum distinctio, culpa
        magnam, quasi accusantium enim. Corrupti suscipit, cumque vitae nostrum
        alias ipsam aspernatur libero illum pariatur dignissimos voluptatibus
        minus, inventore totam ullam. Possimus impedit facilis recusandae.
        Cumque tempore similique ipsa mollitia id totam nihil, tempora, at
        perferendis quas rem. Ipsa fugiat nesciunt placeat vero minima optio
        repudiandae laboriosam tempore eligendi natus eos, nostrum velit
        accusamus assumenda omnis doloribus quae dolorem facere, odit fugit
        consequuntur. Dolore ducimus qui dicta accusantium ea? Blanditiis,
        labore ipsum. Doloremque dignissimos error maiores dolorum sed fugit
        voluptates esse numquam veniam facere earum, nemo quibusdam repellendus
        nam tenetur eos incidunt explicabo tempore fugiat quas possimus quia
        reiciendis dicta! Dignissimos, eveniet possimus reiciendis a nulla dicta
        quisquam expedita ex laborum deserunt facilis autem corrupti!
      </p>
      <h2 ref={headerRef3}>lorem 3 </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        molestiae eveniet est deleniti. Pariatur suscipit nulla accusamus
        repellat rerum est, blanditiis libero, impedit non, ad iure vel! Nisi,
        distinctio praesentium numquam voluptatibus est dolorum eligendi
        pariatur iure sequi veniam a, blanditiis vitae culpa mollitia.
        Distinctio dolores explicabo reiciendis quos optio. Rerum eveniet
        numquam laboriosam fuga eius magni, itaque recusandae doloribus sint
        nemo impedit distinctio neque nobis architecto rem doloremque deserunt
        blanditiis autem! Dicta earum ipsam pariatur accusamus, aliquam
        reprehenderit animi non tempora ducimus vel tempore ipsum. Sunt quisquam
        error veniam nihil sint voluptatum impedit quasi eius eligendi
        recusandae. Neque tenetur ab temporibus veniam quod deserunt. Quibusdam
        architecto soluta, hic, fugit maiores eum earum incidunt dolor facilis
        dicta voluptate, libero voluptatum ipsam! Accusamus nam numquam eius
        quia delectus ducimus, eaque unde quod cupiditate cum distinctio, culpa
        magnam, quasi accusantium enim. Corrupti suscipit, cumque vitae nostrum
        alias ipsam aspernatur libero illum pariatur dignissimos voluptatibus
        minus, inventore totam ullam. Possimus impedit facilis recusandae.
        Cumque tempore similique ipsa mollitia id totam nihil, tempora, at
        perferendis quas rem. Ipsa fugiat nesciunt placeat vero minima optio
        repudiandae laboriosam tempore eligendi natus eos, nostrum velit
        accusamus assumenda omnis doloribus quae dolorem facere, odit fugit
        consequuntur. Dolore ducimus qui dicta accusantium ea? Blanditiis,
        labore ipsum. Doloremque dignissimos error maiores dolorum sed fugit
        voluptates esse numquam veniam facere earum, nemo quibusdam repellendus
        nam tenetur eos incidunt explicabo tempore fugiat quas possimus quia
        reiciendis dicta! Dignissimos, eveniet possimus reiciendis a nulla dicta
        quisquam expedita ex laborum deserunt facilis autem corrupti!
      </p>
      <h2 ref={headerRef4}>lorem 4</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        molestiae eveniet est deleniti. Pariatur suscipit nulla accusamus
        repellat rerum est, blanditiis libero, impedit non, ad iure vel! Nisi,
        distinctio praesentium numquam voluptatibus est dolorum eligendi
        pariatur iure sequi veniam a, blanditiis vitae culpa mollitia.
        Distinctio dolores explicabo reiciendis quos optio. Rerum eveniet
        numquam laboriosam fuga eius magni, itaque recusandae doloribus sint
        nemo impedit distinctio neque nobis architecto rem doloremque deserunt
        blanditiis autem! Dicta earum ipsam pariatur accusamus, aliquam
        reprehenderit animi non tempora ducimus vel tempore ipsum. Sunt quisquam
        error veniam nihil sint voluptatum impedit quasi eius eligendi
        recusandae. Neque tenetur ab temporibus veniam quod deserunt. Quibusdam
        architecto soluta, hic, fugit maiores eum earum incidunt dolor facilis
        dicta voluptate, libero voluptatum ipsam! Accusamus nam numquam eius
        quia delectus ducimus, eaque unde quod cupiditate cum distinctio, culpa
        magnam, quasi accusantium enim. Corrupti suscipit, cumque vitae nostrum
        alias ipsam aspernatur libero illum pariatur dignissimos voluptatibus
        minus, inventore totam ullam. Possimus impedit facilis recusandae.
        Cumque tempore similique ipsa mollitia id totam nihil, tempora, at
        perferendis quas rem. Ipsa fugiat nesciunt placeat vero minima optio
        repudiandae laboriosam tempore eligendi natus eos, nostrum velit
        accusamus assumenda omnis doloribus quae dolorem facere, odit fugit
        consequuntur. Dolore ducimus qui dicta accusantium ea? Blanditiis,
        labore ipsum. Doloremque dignissimos error maiores dolorum sed fugit
        voluptates esse numquam veniam facere earum, nemo quibusdam repellendus
        nam tenetur eos incidunt explicabo tempore fugiat quas possimus quia
        reiciendis dicta! Dignissimos, eveniet possimus reiciendis a nulla dicta
        quisquam expedita ex laborum deserunt facilis autem corrupti!
      </p>
      <button className="scrollToTop" onClick={scrollToTop}>
        Go Up
      </button>
    </div>
  );
}

export default App;
