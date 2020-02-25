<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div class="card">
        <div class="card-header">Formulario para iniciar sesión</div>
        <div class="card-body">
          <form>
            <div style="text-align:center;" class="form-group">
              <LoginFacebook style="margin-right:5px;" label="Iniciar sesión con Facebook"/>
              <LoginGoogle label="Iniciar sesión con Google"/>
            </div>
            <div class="form-group">
              <label for="usuario">Usuario<span class="required">*</span></label>
              <input type="text" class="form-control" id="usuario" required aria-describedby="usuarioHelp">
              <small id="usuarioHelp" class="form-text text-muted">Ingresa tu usuario</small>
            </div>
            <div class="form-group">
              <label for="password">Contraseña<span class="required">*</span></label>
              <input type="password" class="form-control" id="password" required aria-describedby="passwordHelp">
              <small id="passwordHelp" class="form-text text-muted">Ingresa tu contraseña</small>
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-orange">Iniciar sesión</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import LoginFacebook from '@/components/LoginFacebook.vue'
import LoginGoogle from '@/components/LoginGoogle.vue'

export default {
  name: 'Login',
  components: {
    LoginFacebook,
    LoginGoogle
  }
}
</script>
