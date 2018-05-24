<?php
/**
 * Created by PhpStorm.
 * User: tintounn
 * Date: 18/03/18
 * Time: 13:59
 */

namespace Services;

use Lcobucci\JWT\Builder;
use Lcobucci\JWT\ValidationData;

class JwtService
{

  private $key = '5GTD%BS3';

  public function generateToken() {
    return (new Builder())->setIssuer('http://example.com') // Configures the issuer (iss claim)
                            ->setAudience('http://example.org') // Configures the audience (aud claim)
                            ->setIssuedAt(time()) // Configures the time that the token was issue (iat claim)
                            ->setExpiration(time() + 3600) // Configures the expiration time of the token (exp claim)
                            ->getToken(); // Retrieves the generated token
  }

  public function tokenIsValid($token) {
    $data = new ValidationData();
    $token = (new Parser())->parse((string) $token);
    return $token->validate();
  } 
}