<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Payment Gateway Demo</title>
</head>
<body>
  <?php
  // Connect to the database (Replace with your database credentials)
  $servername = "localhost";
  $username = "your_username";
  
  $dbname = "your_database";

  $conn = new mysqli($servername, $username, $dbname);

  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }

  // Process the payment
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $order_id = $_POST["order_id"];
      $amount = $_POST["amount"];
      $account_number = $_POST["account_number"];

      // Here, you would integrate with a real payment gateway (e.g., PayPal, Stripe)
      // For demonstration purposes, we will simulate a successful payment.
      $payment_status = "success";

      // Store the payment details in the database
      $sql = "INSERT INTO payments (order_id, amount, account_number, status) VALUES ('$order_id', '$amount', '$account_number', '$payment_status')";

      if ($conn->query($sql) === TRUE) {
          echo "Payment successful!";
      } else {
          echo "Error: " . $sql . "<br>" . $conn->error;
      }
  }

  $conn->close();
  ?>
  <h1>Payment Gateway Demo</h1>
  <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
    <label for="order_id">Order ID:</label>
    <input type="text" name="order_id" required><br>
    <label for="amount">Amount:</label>
    <input type="number" name="amount" required><br>
    <label for="account_number">Account Number:</label>
    <input type="text" name="account_number" required><br>
    <button type="submit">Pay Now</button>
  </form>
</body>
</html>
