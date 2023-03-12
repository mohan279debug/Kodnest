import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Step 1: Customers provide us with their current credit card statement.
      <br/>
Step 2: Our team of experts analyzes the statement and identifies any hidden fees or unnecessary charges.
<br/>
Step 3: We research and compare the best credit card deals available in the market.
<br/>
Step 4: We present our findings to the customer and recommend the best card option for their needs.
<br/>
Step 5: The customer can choose to switch to the recommended card and start saving money on fees.
<br/>

Our goal is to help our customers find the best credit card deals that suit their needs and help them save money.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
