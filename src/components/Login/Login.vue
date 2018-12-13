<template>
	<div id="login" class="form">
		<h2>Welcome !</h2>
		<span class="form-status" v-bind:class="{'status-error': status.code >= 300 }">{{ status.message }}</span>
		<div class="form-entry">
			<label for="login">Login</label>
			<input type="text" name="login" v-model="login">
		</div>
		<div class="form-entry">
			<label for="password">Password</label>
			<input type="password" name="password" v-model="password">
		</div>
		<div class="form-buttons">
			<button @click="$parent.changePerspective('register')">NicoNicreate account</button>
			<button class="button-red" @click="connect">NicoNiconnect</button>
		</div>
	</div>
</template>

<script src="./Login.js"></script>
<style src="./Login.css"></style>