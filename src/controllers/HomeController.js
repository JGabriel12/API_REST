class HomeController {
  index(req, res) {
    res.json({
      MSG: 'success!!!',
    });
  }
}

export default new HomeController();
