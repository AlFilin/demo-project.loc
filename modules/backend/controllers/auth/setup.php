<h2><?= __('Create Account') ?></h2>

<?= Form::open() ?>
    <input type="hidden" name="postback" value="1" />

    <p><?= __("Please create a new account for logging in to the Administration Area.") ?></p>

    <div class="form-elements" role="form">
        <div class="form-group text-field span-left">
            <label class="form-label" for="adminFirstName"><?= __("First Name") ?></label>
            <input
                id="adminFirstName"
                type="text"
                name="first_name"
                class="form-control"
                value="<?= e(post('first_name')) ?>"
                placeholder="eg: Admin"
            />
        </div>

        <div class="form-group text-field span-right">
            <label class="form-label" for="adminLastName"><?= __("Last Name") ?></label>
            <input
                id="adminLastName"
                type="text"
                name="last_name"
                class="form-control"
                value="<?= e(post('last_name')) ?>"
                placeholder="eg: Person"
            />
        </div>

        <div class="form-group text-field span-full">
            <label class="form-label" for="adminEmail"><?= __("Email Address") ?></label>
            <input
                id="adminEmail"
                type="text"
                name="email"
                class="form-control"
                value="<?= e(post('email')) ?>"
                placeholder="eg: admin@domain.tld"
                onkeyup="suggestUsernameForSetup(this)"
            />
        </div>

        <div class="form-group text-field span-full">
            <label class="form-label" for="adminLogin"><?= __("Pick a Username") ?></label>
            <input
                id="adminLogin"
                type="text"
                name="login"
                class="form-control"
                value="<?= e(post('login')) ?>"
                placeholder="eg: myusername"
            />
        </div>

        <div class="form-group text-field span-left">
            <label class="form-label" for="adminPassword"><?= __("Enter New Password") ?></label>
            <input
                id="adminPassword"
                type="password"
                name="password"
                class="form-control"
                value=""
            />
        </div>

        <div class="form-group text-field span-right">
            <label class="form-label" for="adminConfirmPassword"><?= __("Confirm Password") ?></label>
            <input
                id="adminConfirmPassword"
                type="password"
                name="password_confirmation"
                class="form-control"
                value=""
            />
        </div>

        <!-- Submit Form -->
        <button type="submit" class="btn btn-primary pull-right">
            <?= __("Create Account") ?>
        </button>
    </div>

<?= Form::close() ?>

<script>
    // Suggest a custom username
    function suggestUsernameForSetup(el) {
        var email = el.value,
            username = email.slice(0, email.indexOf('@'));

        document.querySelectorAll('input[name="login"]').forEach(function(input) {
            input.placeholder = 'eg: ' + (username || 'myusername');
        });
    }
</script>
