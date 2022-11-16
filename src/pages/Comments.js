import "./Comments.css";

function Comments() {
  return (
    <div class="customers-section">
      <div class="customer-title">
        <h3 class="comments-title">What our customers say about us</h3>
      </div>
      <div class="customers-comments">
        <div class="customer-container">
          <div class="customer">
            <span class="comment1">
              “ Excellent treatment by the employees. Incredible variety of
              plants. I will be back!”.
            </span>
            <p class="customer-name">Jack Smith</p>
          </div>
        </div>
        <div class="customer-container">
          <div class="customer">
            <span class="comment2">
              “Beautiful nursery in the heart of Chelsea. The employees advised
              me on what I was looking for. Thank you very much! ”.
            </span>
            <p customer-name>Michelle Harvey</p>
          </div>
        </div>
        <div class="customer-container">
          <div class="customer">
            <span class="comment3">
              “ Warm and cordial treatment. The place feels very peaceful. I
              also bought online and had my order at home in two days. Highly
              recommended”.
            </span>
            <p class="costumer-name">Samuel Holland</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
