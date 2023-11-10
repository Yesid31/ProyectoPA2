export function Formulario() {
  return (
    <>
      <form>
        <div className="row">
          <div className="col-12 col-md-6">
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Usuario
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Telefono
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
          </div>
        </div>
        <div className="row"></div>
      </form>
    </>
  );
}
