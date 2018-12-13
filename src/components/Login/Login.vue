<template>
	<div id="login" class="form">
		<h2>Welcome !</h2>
		<div class="form-entry">
			<label for="login">Login</label>
			<input type="text" name="login">
		</div>
		<div class="form-entry">
			<label for="password">Password</label>
			<input type="password" name="password">
		</div>
		<div class="form-buttons">
			<button @click="$parent.changePerspective('register')">NicoNicreate account</button>
			<button class="button-red" @click="triggerConnectionRequest">NicoNiconnect</button>
		</div>
	</div>
</template>

<script src="./Login.js"></script>
<style src="./Login.css"></style>