const ap = new Aplayer({
	container: document.getElementById('aplayer'),
	fixed: true,
	mini: true,
	mutex: true,
	audio: [
	{
		name: 'Gemini',
		artist: 'DarkBug',
		url: 'http://music.163.com/song/media/outer/url?id=545907304.mp3'
		cover: 'http://p1.music.126.net/OtNDktaloHFu1Qlz3l12jw==/109951163192501852.jpg?'
	}
	]
});