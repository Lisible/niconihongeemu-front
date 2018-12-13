<template>
	<div id="login" class="form">
		<h2>Register</h2>
		<span class="form-status">{{ statusMessage }}</span>
		<div class="form-entry">
			<label for="login">Login</label>
			<input type="text" name="login" v-model="login">
		</div>
		<div class="form-entry">
			<label for="password">Password</label>
			<input type="password" name="password" v-model="password">
		</div>
		<div class="form-buttons">
			<button @click="$parent.changePerspective('login')">NicoNicancel</button>
			<button class="button-red" @click="onConfirmButtonClicked">NicoNiconfirm</button>
		</div>
	</div>
</template>

<script src="./Register.js"></script>
<style src="./Register.css"></style>