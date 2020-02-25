<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div class="card">
        <div class="card-header">Formulario de registro</div>
        <div class="card-body">
          <form>
            <div style="text-align:center;" class="form-group">
              <LoginFacebook style="margin-right:5px;" label="Regístrate con Facebook"/>
              <LoginGoogle label="Regístrate con Google"/>
            </div>
            <div class="form-group">
              <label for="nombre">Nombre<span class="required">*</span></label>
              <input type="nombre" class="form-control" id="nombre" required aria-describedby="nombreHelp">
              <small id="nombreHelp" class="form-text text-muted">Ingresa tu nombre</small>
            </div>
            <div class="form-group">
              <label for="apellido">Apellido<span class="required">*</span></label>
              <input type="apellido" class="form-control" id="apellido" required aria-describedby="apellidoHelp">
              <small id="apellidoHelp" class="form-text text-muted">Ingresa tu apellido</small>
            </div>
            <div class="form-group">
              <label for="email">Email<span class="required">*</span></label>
              <input type="email" class="form-control" id="email" required aria-describedby="emailHelp">
              <small id="emailHelp" class="form-text text-muted">Ingresa tu email</small>
            </div>
            <div class="form-group">
              <label for="telefono">Teléfono<span class="required">*</span></label>
              <input type="text" class="form-control" id="telefono" required aria-describedby="telefonoHelp">
              <small id="telefonoHelp" class="form-text text-muted">Ingresa tu número de teléfono</small>
            </div>
            <div class="form-group">
              <label for="usuario">Usuario<span class="required">*</span></label>
              <input type="text" class="form-control" id="usuario" required aria-describedby="usuarioHelp">
              <small id="usuarioHelp" class="form-text text-muted">Ingresa tu nombre de usuario</small>
            </div>
            <div class="form-group">
              <label for="password">Contraseña<span class="required">*</span></label>
              <input type="password" class="form-control" id="password" required aria-describedby="passwordHelp">
              <small id="passwordHelp" class="form-text text-muted">Ingresa una contraseña</small>
            </div>
            <div class="form-group">
              <label for="confirmar_password">Confirmar contraseña<span class="required">*</span></label>
              <input type="confirmar_password" class="form-control" id="confirmar_password" required aria-describedby="confirmar_passwordHelp">
              <small id="confirmar_passwordHelp" class="form-text text-muted">Confirma tu contraseña</small>
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="terminos_condiciones" required>
              <label class="form-check-label" for="terminos_condiciones">Acepta términos y condiciones<span class="required">*</span></label>
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="suscripcion" required>
              <label class="form-check-label" for="suscripcion">Acepta recibir información<span class="required">*</span></label>
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
import LoginFacebook from '@/components/LoginFacebook.vue'
import LoginGoogle from '@/components/LoginGoogle.vue'

export default {
  name: 'Registro',
  components: {
    LoginFacebook,
    LoginGoogle
  }
}
</script>
