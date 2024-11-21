

const Accordion = () => {
  return (
    <div className="flex flex-col gap-1 w-4/5 lg:w-2/3 mx-auto">
        <div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-xl font-medium">What type of clothing does StellarBD offer?</div>
  <div className="collapse-content">
    <p>We provide stylish apparel for men from casual to formal wear.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">What is the return and exchange policy?</div>
  <div className="collapse-content">
    <p>Returns or exchanges are accepted within 14 days if items are unused and have tags.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">Do you offer delivery services?</div>
  <div className="collapse-content">
    <p>Yes, we deliver nationwide with free shipping on eligible orders!</p>
  </div>
</div>
    </div>
  )
}

export default Accordion