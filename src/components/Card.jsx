const Card = () => {
  return (
    <div class="card lg:card-side bg-base-100 text-neutral-content bordered my-3">
      <figure>
        <img src="https://picsum.photos/id/1068/400/250" />
      </figure>
      <div class="card-body ">
        <h2 class="card-title">
          Thank Gilead, it's Friday!
          <div class="badge mx-2 bg-info">Fake News</div>
        </h2>
        <p className="text-base-content text-opacity-40">
          Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
          sit necessitatibus veritatis sed molestiae voluptates incidunt iure
          sapiente.Rerum reiciendis beatae tenetur excepturi aut pariatur est
          eos. Sit sit necessitatibus veritatis sed molestiae voluptates
          incidunt iure sapiente.
        </p>
        <div class="card-actions">
          <a href="/" class="btn btn-primary">
            Truth Link
          </a>
          <a href="/" class="btn btn-ghost">
            Claim Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
