<template>
  <button class="btn btn-facebook _1QoxDw Qkd66A n9zSJA ZTpOuQ o4TrkA NT2yCg Qkd66A n9zSJA ZTpOuQ GnpDIA zQlusQ" title="Regístrate con Facebook" aria-label="Regístrate con Facebook" type="button">
    <span class="TcNIhA">
      <span aria-hidden="true" class="f_b3kA xR4dgg G-RjYw">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.61v-6.97h-2.34V11.3h2.34v-2c0-2.33 1.42-3.6 3.5-3.6 1 0 1.84.08 2.1.12v2.43h-1.44c-1.13 0-1.35.53-1.35 1.32v1.73h2.69l-.35 2.72h-2.34V21h4.59a1 1 0 0 0 .99-1V4a1 1 0 0 0-1-1z"></path>
        </svg>
      </span>
    </span>
    <span class="_38oWvQ">{{label}}</span>
  </button>
</template>

<style scoped>
.btn-facebook {
  background-color: #4267B2;
  color: white;
}
</style>

<script>
export default {
  name: 'LoginFacebook',
  props: {
		label: {type: String, required: true},
	},
}
</script>
