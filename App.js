getLists() {
  this.setState({ loading: true }, () => {
    fetch("http://localhost:3000/posts")
      .then(res => res.json())
      .then(result =>
        this.setState({
          loading: false,
          alldata: result
        })
      )
      .catch(console.log);
  });
}