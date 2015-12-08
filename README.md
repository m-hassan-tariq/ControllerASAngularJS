# Controller AS syntax For AngularJS
Implementation of AngularJS syntax for “Controller As” and the “vm” Variable

1: Use the controllerAs syntax over the classic controller with $scope syntax.

Why?: Controllers are constructed, "newed" up, and provide a single new instance, and the controllerAs syntax is closer to that of a JavaScript constructor than the classic $scope syntax.

Why?: It promotes the use of binding to a "dotted" object in the View (e.g. customer.name instead of name), which is more contextual, easier to read, and avoids any reference issues that may occur without "dotting".

Why?: Helps avoid using $parent calls in Views with nested controllers.

2: The controllerAs syntax uses this inside controllers which gets bound to $scope

Why?: controllerAs is syntactic sugar over $scope. You can still bind to the View and still access $scope methods.

Why?: Helps avoid the temptation of using $scope methods inside a controller when it may otherwise be better to avoid them or move the method to a factory, and reference them from the controller. Consider using $scope in a controller only when needed. For example when publishing and subscribing events using $emit, $broadcast, or $on.

3: Use a capture variable for this when using the controllerAs syntax. Choose a consistent variable name such as vm, which stands for ViewModel.

Why?: The this keyword is contextual and when used within a function inside a controller may change its context. Capturing the context of this avoids encountering this problem.
