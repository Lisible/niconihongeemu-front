<template>
	<div id="login" class="form">
		<h2>Create an account</h2>
		<span class="form-status" v-bind:class="{'status-error': status.code >= 300 }">{{ status.message }}</span>
		<div class="form-entry">
			<label for="userlogin">Login</label>
			<input type="text" name="login" id="userlogin" v-model="login">
		</div>
		<div class="form-entry">
			<label for="password">Password</label>
			<input type="password" name="password" id="password" v-model="password" @keyup.enter="register">
		</div>
		<div class="form-buttons">
			<button @click="$parent.changePerspective('login')">NicoNicancel</button>
			<button class="button-red" @click="register">NicoNiconfirm</button>
		</div>
	</div>
</template>

<script src="./Register.js"></script>
<style src="./Register.css"></style>