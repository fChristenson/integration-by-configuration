# Integrations by configuration

## What we will cover

* One of the biggest problems with integration based applications
* A possible way to solve it
* The end goal

## Notes

When you are dealing with b2b integrations the number one problem you will have
is that you need to deal with a external system and a architecture that was designed
without your systems needs taken in to account.

Different customers will have different demands on your system and if you want to close
the deal with a big customer you will likely have to change your system to suit them.

This changes over time but in the beginning you will likely have to compromise until
your system matures to such a point that you can provide enough business value for your
target customers to make it profitable to say "no" to custom integrations.

Some common problems are:

* The more custom logic a customer wants the more permutation of testing you have
* Every deviation in network interface is another set of documentation you need to maintain
* If your system depends on calling one of the clients services you are at risk of downtime
* If you mix custom logic from different clients you are very likely to cause regressions

Your goal should be to reduce the amount of permutations and custom logic you have but never
start adding generic logic until you start to see a pattern that you can abstract.

The less forks in logic you have the easier it is to maintain and develop the system so if
you can try to isolate the custom logic as much as possible.

This will give you confidence when releasing new features as you can reduce the risk of causing
a regression for another client.
