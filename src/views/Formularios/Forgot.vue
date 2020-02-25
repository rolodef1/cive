<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div class="card">
        <div class="card-header">Formulario para recuperar contraseña o usuario</div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label for="email">Email<span class="required">*</span></label>
              <input type="email" class="form-control" id="email" required aria-describedby="emailHelp">
              <small id="emailHelp" class="form-text text-muted">Ingresa tu email</small>
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-orange">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Forgot'
}
</script>
