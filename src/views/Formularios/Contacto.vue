<template>
	<div class="row">
		<div class="col-md-6 offset-md-3">
			<div class="card">
				<div class="card-header">Formulario de contacto</div>
				<div class="card-body">
					<form>
						<div class="form-group">
							<label for="nombre">Nombre<span class="required">*</span></label>
							<input type="text" class="form-control" id="nombre" required aria-describedby="nombreHelp">
							<small id="nombreHelp" class="form-text text-muted">Ingresa tu nombre</small>
						</div>
						<div class="form-group">
							<label for="telefono">Teléfono</label>
							<input type="text" class="form-control" id="telefono" aria-describedby="telefonoHelp">
							<small id="telefonoHelp" class="form-text text-muted">Ingresa tu teléfono</small>
						</div>
						<div class="form-group">
							<label for="email">Email<span class="required">*</span></label>
							<input type="email" class="form-control" id="email" required aria-describedby="emailHelp">
							<small id="emailHelp" class="form-text text-muted">Ingresa tu email</small>
						</div>
						<div class="form-group">
							<label for="mensaje">Mensaje<span class="required">*</span></label>
							<textarea class="form-control" id="mensaje" required aria-describedby="mensajeHelp"/>
							<small id="mensajeHelp" class="form-text text-muted">Ingresa tu mensaje</small>
						</div>
						<button type="submit" class="btn btn-orange">Enviar</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'Contacto'
}
</script>
