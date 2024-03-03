import VideoBanner from "@/components/banner/VideoBanner";
import Image from "next/image";

export default function TypoDefaultLayout() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <section id="headings">
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
          </section>
          <section id="paragraph">
            <p>Hello</p>
          </section>
          <section id="list">
            <div className="row">
              <div className="col-6">
                <ul>
                  <li>List Item 1</li>
                  <li>List Item 2</li>
                  <li>List Item 3</li>
                  <li>List Item 4</li>
                  <li>List Item 5</li>
                  <li>List Item 6</li>
                </ul>
              </div>
              <div className="col-6">
                <ol>
                  <li>List Item 1</li>
                  <li>List Item 2</li>
                  <li>List Item 3</li>
                  <li>List Item 4</li>
                  <li>List Item 5</li>
                  <li>List Item 6</li>
                </ol>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
