import Card from '../card/Card'
import styles from './typography.module.css'

const Typography = () => {
  return (
    <div className={styles.typography}>
      <Card
        headingH2="Created using Poppins Font Family"
        headingSpan="Black Table Heading"
      >
        <div className={styles.typoContent}>
          <ul>
            <li>
              <span>Header 1</span>
              <h1>The Life of Black Dashboard React</h1>
            </li>
            <li>
              <span>Header 2</span>
              <h2>The Life of Black Dashboard React</h2>
            </li>
            <li>
              <span>Header 3</span>
              <h3>The Life of Black Dashboard React</h3>
            </li>
            <li>
              <span>Header 4</span>
              <h4>The Life of Black Dashboard React</h4>
            </li>
            <li>
              <span>Header 5</span>
              <h5>The Life of Black Dashboard React</h5>
            </li>
            <li>
              <span>Header 6</span>
              <h6>The Life of Black Dashboard React</h6>
            </li>
            <li>
              <span>Paragraph</span>
              <p>I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at</p>
            </li>
            <li>
              <span>Quote</span>
              <p>
                <q>"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."</q>
                <span>- NOAA</span>  
              </p>
            </li>
            <li>
              <span className={styles.muted}>Muted Paragraph</span>
              <p>
                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..</p>
            </li>
            <li>
              <span className={styles.primary}>Primary Paragraph</span>
              <p>
                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..</p>
            </li>
            <li>
              <span className={styles.success}>Success Paragraph</span>
              <p>
                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..</p>
            </li>
            <li>
              <span className={styles.info}>Info Paragraph</span>
              <p>
                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..</p>
            </li>
            <li>
              <span className={styles.warning}>Warning Paragraph</span>
              <p>
                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..</p>
            </li>
            <li>
              <span className={styles.danger}>Danger Paragraph</span>
              <p>
                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..</p>
            </li>
            <li>
              <span>Small Tag</span>
              <h2>
                  <p> Header with small subtitle</p>
                  <p>Use "small" tag for the headers</p>
              </h2>
            </li>
            <li>
              <span>Lists</span>
              <div>
                <div>
                  <span>Unordered List</span>
                  <ul className={styles.unordered}>
                    <li>List item</li>
                    <li>List item</li>
                    <ul>
                      <li>List item</li>
                      <li>List item</li>
                      <li>List item</li>
                    </ul>
                    <li>List item</li>
                  </ul>
                </div>
                <div>
                  <span>Ordered List</span>
                  <ol className={styles.ordered}>
                    <li>List item</li>
                    <li>List item</li>
                    <li>List item</li>
                    <li>List item</li>
                  </ol>
                </div>
                <div>
                  <span>Unstyled List</span>
                  <ul className={styles.unstyled}>
                    <li>List items</li>
                    <li>List items</li>
                    <li>List items</li>
                    <li>List items</li>
                  </ul>
                </div>
                <div>
                  <span>Inline List</span>
                  <ul className={styles.inilne}>
                    <li>List 1</li>
                    <li>List 2</li>
                    <li>List 3</li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <span>Code</span>
              <div>
                <p>
                  This is <code>.css-class-as-code</code>, an example of an inline code element. Wrap inline code within a <code>&lt;code&gt;...&lt;/code&gt; </code>tag.
                  <ul>
                    <li><code>1. #This is an example of preformatted text.</code></li>
                    <li><code>2. #Here is another line of code</code></li>
                  </ul>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </Card>
    </div>
  )
}

export default Typography
