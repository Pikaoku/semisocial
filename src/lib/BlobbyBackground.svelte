some content
<div class="blobbies">
	<!-- <div class="hero"></div> -->
	<div class="intro"></div>
	<!-- <div class="skills"></div> -->
</div>

<style lang="postcss">
	.blobbies {
		display: grid;
		grid-template-columns: 1fr;
	}

	.blobbies > div {
		grid-row: 1;
		grid-column: 1;
	}

	.hero {
		background: red;
		height: 10vh;
		-webkit-clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
		clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
	}

	.intro {
		-webkit-clip-path: polygon(50% 50%, 100% 0, 100% 100%, 0% 90%);
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 90%);
		height: 20vh;
		background-color: blue;
		opacity: 0.2;
	}

	.skills {
		background: purple;
		opacity: 0.4;
		height: 10vh;
		-webkit-clip-path: polygon(100% 0, 100% 0, 100% 90%, 0% 100%);
		clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
	}
</style>
