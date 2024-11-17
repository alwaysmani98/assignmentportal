
const validateUserInput = (req, res, next) => {
    const { error } = userValidation(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });
    next();
  };
  
  const validateAssignmentInput = (req, res, next) => {
    const { error } = assignmentValidation(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });
    next();
  };
  