<template>
	<div id="login">
		<h2>Register</h2>
		<div class="form-entry">
			<label for="login">Login</label>
			<input type="text" name="login">
		</div>
		<div class="form-entry">
			<label for="password">Password</label>
			<input type="password" name="password">
		</div>
		<button @click="triggerAccountCreationRequest">NicoNiconfirm</button>
		<button @click="$parent.changePerspective('login')">NicoNicancel</button>
	</div>
</template>

<script src="./Register.js"></script>
<style src="./Register.css"></style>